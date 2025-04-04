import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from '../../../utils/request';
import merge from 'lodash/merge';
import { GET_BLOGS_CATEGORIES, GET_BLOGS_DATA, GET_DETAIL_DATA } from './constants';
import {
  getBlogsDataSuccess,
  getBlogsDataFail,
  getBlogsCategorySuccess,
  getBlogsCategoryFailure,
  getBlogsDetailSuccess,
  getBlogsDetailFailure,
} from './actions';
import filter from 'lodash/filter';

const emohaUrl = 'https://testing.emoha.com';

function* fetchBlogPosts() {
  const mapArray = ['health', 'nutrition'];
  const mappedCategories = [];
  const Obj = {};
  const options = value => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories?slug=${value}`,
  });
  const optionsPosts = category => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/posts?categories=${category[0].id}&per_page=6&page=1`,
  });
  const optionsImages = obj => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/media/${obj?.featured_media}`,
  });
  const optionsPostsTop = {
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/posts?per_page=9&page=1`,
  };
  const optionsAllCategories = i => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories?per_page=100&page=${i + 1}`,
  });
  const metaTags = {
    method: 'GET',
    url: `https://testing.emoha.com/blogs/wp-json/yoast/v1/get_head?url=https://testing.emoha.com/blogs`,
  };

  const optionsCategories = data => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories/${data?.categories[0]}`,
  });

  // const optionsAllPosts = i => ({
  //   method: 'GET',
  //   url: `${emohaUrl}/blogs/wp-json/wp/v2/posts?per_page=100&page=${i + 1}`,
  // });

  try {
    for (let i = 0; i < mapArray.length; i++) {
      const category = yield call(request, options(mapArray[i]));
      const posts = yield call(request, optionsPosts(category));
      const imagesData = yield all(posts.map(user => call(request, optionsImages(user))));
      const imageDataUrl = imagesData.map(user => ({ source_url: user.source_url, altTag: user?.alt_text }));
      const catDataSlug = posts.map(() => ({ catSlug: category[0].slug }));
      const combinedData = merge(posts, imageDataUrl, catDataSlug);
      const finalData = { show_type: category[0].name, catSlug: category[0].slug, data: combinedData };
      mappedCategories.push(finalData);
    }
    Obj['categoriesPosts'] = mappedCategories;

    const topPosts = yield call(request, optionsPostsTop);
    const topPostsImagesData = yield all(topPosts.map(data => call(request, optionsImages(data))));
    const imageDataUrl = topPostsImagesData.map(user => ({ source_url: user.source_url, altTag: user?.alt_text }));
    const topPostsCategoriesData = yield all(topPosts.map(data => call(request, optionsCategories(data))));
    const catObj = topPostsCategoriesData.map(data => ({
      catName: data.slug,
    }));
    const combinedDataTopPosts = merge(topPosts, imageDataUrl, catObj);
    Obj['topPosts'] = combinedDataTopPosts;

    const allCategories = yield all(Array.from({ length: 2 }).map((_, i) => call(request, optionsAllCategories(i))));
    const filteredCategories = filter(allCategories.flat(2), data => data.slug !== 'uncategorized');
    const sequenceObj = {
      Health: 0,
      Nutrition: 1,
      Fitness: 2,
      Safety: 3,
      Busy: 4,
      Convenience: 5,
    };
    const sequencedArray = [];
    for (let i = 0; i < filteredCategories.length; i++) {
      sequencedArray[sequenceObj[filteredCategories[i].name]] = filteredCategories[i];
    }
    Obj['allCategories'] = sequencedArray;

    const metaTagsData = yield call(request, metaTags);
    Obj['metaTags'] = metaTagsData;

    // const fullBlogsData = [];
    // for (let i = 0; i < 9; i++) {
    //   const data = yield call(request, optionsAllPosts(i));
    //   fullBlogsData.push(data);
    // }
    // const newAllPosts = fullBlogsData.flat(9);
    // const searchInput = [];

    // filteredCategories.map(data => {
    //   const categoriesData = newAllPosts.filter(obj => obj.categories[0] === data.id);
    //   categoriesData.map(catData => {
    //     newAllPosts.push({ params: { categories: data.slug, detail: catData.slug } });
    //   });
    // });

    yield put(getBlogsDataSuccess(Obj));
  } catch (err) {
    yield put(getBlogsDataFail(err));
  }
}

function* fetchBlogCategoryData({ payload }) {
  const Obj = {};
  const options = value => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories?slug=${value}`,
  });
  const optionsPosts = category => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/posts?categories=${category[0].id}&per_page=20`,
  });
  const optionsImages = obj => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/media/${obj?.featured_media}`,
  });
  const optionsAllCategories = i => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories?per_page=100&page=${i + 1}`,
  });
  try {
    const category = yield call(request, options(payload?.category));
    const topPosts = yield call(request, optionsPosts(category));
    const topPostsImagesData = yield all(topPosts.map(user => call(request, optionsImages(user))));
    const imageDataUrl = topPostsImagesData.map(user => ({ source_url: user.source_url, altTag: user?.alt_text }));
    const combinedDataTopPosts = merge(topPosts, imageDataUrl);
    Obj['paginatedData'] = combinedDataTopPosts;
    Obj['categoryInfo'] = { name: category[0].name };
    const allCategories = yield all(Array.from({ length: 2 }).map((_, i) => call(request, optionsAllCategories(i))));
    const filteredCategories = filter(allCategories.flat(2), data => data.slug !== 'uncategorized');
    const sequenceObj = {
      Health: 0,
      Nutrition: 1,
      Fitness: 2,
      Safety: 3,
      Busy: 4,
      Convenience: 5,
    };
    const sequencedArray = [];
    for (let i = 0; i < filteredCategories.length; i++) {
      sequencedArray[sequenceObj[filteredCategories[i].name]] = filteredCategories[i];
    }
    Obj['allCategories'] = sequencedArray;
    yield put(getBlogsCategorySuccess(Obj));
  } catch (err) {
    yield put(getBlogsCategoryFailure(err));
  }
}

function* fetchDetailPage({ payload }) {
  const Obj = {};

  const options = {
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories?slug=${payload.categories}`,
  };
  const optionsCategoryPosts = category => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/posts?categories=${category[0].id}&per_page=6&page=1`,
  });

  const optionsPosts = {
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/posts?slug=${payload.detail}`,
  };

  const optionsImages = obj => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/media/${obj?.featured_media}`,
  });

  const optionsCategories = obj => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/categories/${obj.categories[0]}`,
  });

  const optionsTags = obj => ({
    method: 'GET',
    url: `${emohaUrl}/blogs/wp-json/wp/v2/tags/${obj}`,
  });

  try {
    const topPosts = yield call(request, optionsPosts);
    Obj['blogData'] = topPosts[0];
    const topPostsImagesData = yield call(request, optionsImages(topPosts[0]));
    Obj['blogImageData'] = topPostsImagesData;
    const categories = yield call(request, optionsCategories(topPosts[0]));
    Obj['category'] = categories;
    const topPostsTags = yield all(topPosts[0]?.tags.map(user => call(request, optionsTags(user))));
    Obj['tags'] = topPostsTags;

    const category = yield call(request, options);
    const topCategoryPosts = yield call(request, optionsCategoryPosts(category));
    const topPostsCategoryImagesData = yield all(topCategoryPosts.map(user => call(request, optionsImages(user))));
    const imageDataUrl = topPostsCategoryImagesData.map(user => ({
      source_url: user.source_url,
      altTag: user?.alt_text,
    }));
    const combinedDataTopPosts = merge(topCategoryPosts, imageDataUrl);
    Obj['categoryData'] = combinedDataTopPosts;
    yield put(getBlogsDetailSuccess(Obj));
  } catch (err) {
    yield put(getBlogsDetailFailure(err));
  }
}

export default function* blogsSaga() {
  yield takeLatest(GET_BLOGS_DATA, fetchBlogPosts);
  yield takeLatest(GET_BLOGS_CATEGORIES, fetchBlogCategoryData);
  yield takeLatest(GET_DETAIL_DATA, fetchDetailPage);
}
