/**
 *
 * SearchBar
 *
 */

import React, { memo, useCallback, useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
// import { useTranslation } from 'react-i18next';

import {
  Container,
  SearchIconComponent,
  SearchInput,
  IconButton,
  CloseIconComponent,
  SearchContainer,
  SearchInputContainer,
  SuggestContainer,
  Li,
  Ul,
  SuggestionItem,
} from './styles';

import { EVENT_NAME } from 'constants/constants';
import ReactHtmlParser from 'react-html-parser';
import { pushEvent } from 'utils/cleverTap';

function SearchBar({
  suggestions,
  searchedShows,
  clearSuggestion,
  isSearchActive,
  getSearchSuggestion,
  isBlogsSearch,
}) {
  // const { t } = useTranslation();
  const [isActive, setIsActive] = useState(isSearchActive);
  const [inputValue, setInputValue] = useState(searchedShows?.topic || '');
  const [isSuggestion, setIsSuggestion] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.onpopstate = () => {
      setInputValue('');
      setIsActive(false);
      setIsSuggestion(false);
      if (suggestions) clearSuggestion();
    };
  }, [suggestions, router]);

  const debounceOnChange = useCallback(
    debounce(topicVal => {
      getSearchSuggestion({
        topic: topicVal,
        page_size: 200,
        page_number: 1,
      });
    }, 400),
    []
  );

  const onChangeHandler = useCallback(
    event => {
      setInputValue(event?.target?.value);
      debounceOnChange(event?.target?.value);
      setIsSuggestion(true);
    },
    [inputValue]
  );
  const onCloseClickHandler = useCallback(() => {
    setInputValue('');
    setIsActive(false);
    setIsSuggestion(false);
    if (suggestions) clearSuggestion();
    if (isSearchActive) router.back();
  }, [suggestions, isSearchActive]);

  const toggleSearching = useCallback(() => {
    setIsActive(true);
    setIsSuggestion(true);
  }, []);

  const onSuggestionClick = useCallback(item => {
    pushEvent(EVENT_NAME.SEARCH, {
      search_value: isBlogsSearch ? item?.title : item?.session_topic,
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
    setInputValue(item?.session_topic);
    setIsSuggestion(false);
    if (isBlogsSearch) {
      router.push(`/blogs${item?.href}`);
    } else {
      router.push({
        pathname: `/mohtv`,
        query: {
          search: item?.session_topic,
        },
      });
    }
  }, []);
  return (
    <Container isSearching={isActive} isSuggestion={isSuggestion}>
      <SearchContainer isSuggestion={isSuggestion} isSearching={isActive}>
        <IconButton onClick={toggleSearching}>
          <SearchIconComponent />
        </IconButton>

        {isActive && (
          <SearchInputContainer>
            <SearchInput value={inputValue} onChange={onChangeHandler} />
            <IconButton onClick={onCloseClickHandler}>
              <CloseIconComponent />
            </IconButton>
          </SearchInputContainer>
        )}
      </SearchContainer>
      {isActive && isSuggestion && (
        <SuggestContainer>
          <Ul>
            {suggestions?.length > 0 &&
              suggestions?.map((value, index) => (
                <SuggestionItem
                  key={`${index}-${value?.zoom_meeting_id || value.href}`}
                  onClick={() => onSuggestionClick(value)}>
                  <IconButton>
                    <SearchIconComponent />
                  </IconButton>
                  <Li>{value.session_topic || ReactHtmlParser(value.title)}</Li>
                </SuggestionItem>
              ))}
          </Ul>
        </SuggestContainer>
      )}
    </Container>
  );
}

SearchBar.propTypes = {
  suggestions: PropTypes.array,
  clearSuggestion: PropTypes.func,
  getSearchSuggestion: PropTypes.func,
  isSearchActive: PropTypes.bool,
  searchedShows: PropTypes.object,
  isBlogsSearch: PropTypes.bool,
};

export default memo(SearchBar);
