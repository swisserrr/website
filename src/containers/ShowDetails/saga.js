import { call, put, takeLatest } from 'redux-saga/effects';
import map from 'lodash/map';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isNil from 'lodash/isNil';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';

import request from 'utils/request';
import Helpers from 'utils/helpers';

import { EVENT_DETAILS } from './constants';
import { eventDetailsSuccess, eventDetailsFail } from './actions';
import { APIS } from '../../constants';

function checkVideo(item) {
  if (!isNil(item) && !isNil(get(item, 'video_url'))) {
    return true;
  }
  return false;
}
function getVideoURL(zoomVideoDetails, trailerVideo) {
  if (!isEmpty(zoomVideoDetails)) {
    const videoEle = find(zoomVideoDetails, ['recording_video_to_mobile', true]);
    if (checkVideo(videoEle)) {
      return get(videoEle, 'video_url'); // Particular recording.
    }
    return trailerVideo; // trailor Video if Nil video url.
  }

  if (isEmpty(zoomVideoDetails) && !isNil(trailerVideo)) {
    return trailerVideo;
  }

  return false;
}

function isRecordingAvailable(zoomVideoDetails) {
  if (!isEmpty(zoomVideoDetails)) {
    const videoEle = find(zoomVideoDetails, ['recording_video_to_mobile', true]);

    if (!isNil(videoEle) && !isNil(get(videoEle, 'video_url'))) {
      return true;
    }
    return false;
  }
  return false;
}

function* showDetailsApiHandler({ payload }) {
  let url = Helpers.getUrl(APIS.EVENT_DETAILS);
  url = url.replace(':id', payload);

  const options = {
    method: 'PUT',
    url,
  };

  try {
    const res = yield call(request, options);

    const event = {
      meetings: [],
      videoUrl: res?.data?.eventData?.video_url,
      isTrailerAvailable: !!res?.data?.eventData?.video_url,
      pastShows: res?.data?.past_shows,
      // user_type_moht_shows: res?.data?.user_type_moht_shows,
    };

    event.meetings = map(
      res?.data?.eventMeetingData,
      (
        {
          host_name,
          host_image,
          host_description,
          zoomVideoDetails,
          session_topic,
          session_description,
          session_detail_image,
          zoom_occurrences_start_time,
          mohtv_category_name,
          mohtv_sub_category_name,
          zoom_user_uuid,
          meeting_langauge,
          event_host_uuid,
          zoom_occurrences_duration,
          meeting_details_id,
          zoom_join_url,
          meeting_details_uuid,
        },
        index
      ) => {
        const modifyAddFormate = (date, duration, type, formateType) => {
          dayjs.extend(advancedFormat);

          const formattedDate = dayjs(date)
            .add(duration, type)
            .format(formateType);
          return formattedDate;
        };
        const date = zoom_occurrences_start_time;
        const endTime = modifyAddFormate(
          zoom_occurrences_start_time,
          zoom_occurrences_duration,
          'minutes',
          'YYYY-MM-DD HH:mm:ss'
        );
        return {
          id: index,
          date,
          video: getVideoURL(zoomVideoDetails, res?.data?.eventData?.video_url),
          image: session_detail_image,
          title: session_topic,
          description: session_description,
          conductedBy: {
            name: host_name,
            profilePicture: host_image,
            description: host_description,
          },
          isRecordingAvailable: isRecordingAvailable(zoomVideoDetails),
          mohtvCategoryName: mohtv_category_name,
          mohtvSubCategoryName: mohtv_sub_category_name,
          zoom_user_uuid,
          meeting_langauge,
          event_host_uuid,
          endTime,
          show_id: meeting_details_id,
          zoomJoinURL: zoom_join_url,
          meeting_details_uuid,
        };
      }
    );

    yield put(eventDetailsSuccess(event));
  } catch (e) {
    yield put(eventDetailsFail());
  }
}

// Individual exports for testing
export default function* showDetailsSaga() {
  yield takeLatest(EVENT_DETAILS, showDetailsApiHandler);
}
