import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import MuiContainer from '@mui/material/Container';
import dynamic from 'next/dynamic';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// Import UI components
import { TabsContainer, TabPanContainer, TabLabel, SubContainer } from '../styles';
import ViewAllShows from 'components/ViewAllShows';

// Client-side only components
const ScrollContainer = dynamic(() => import('react-indiana-drag-scroll'), { ssr: false });
const SearchBar = dynamic(() => import('components/SearchBar'), { ssr: false });

// Event tracking
import { EVENT_NAME } from 'constants/constants';
import { pushEvent } from 'utils/cleverTap';

const TabsComponent = ({
  mohtvCategories,
  activeTabId,
  searchSuggestions,
  clearSuggestionHandler,
  getSearchSuggestionHandler,
  searchedShows,
  subCategoryShows,
  addMoreData,
}) => {
  const router = useRouter();

  // Handle tab click with proper analytics
  const handleTabClick = useCallback(
    categoryVal => {
      if (!categoryVal) return;

      // Track analytics
      pushEvent(EVENT_NAME.SELECT_CATEGORY, {
        category: categoryVal?.mohtv_category_name,
      });

      // Only navigate if category changes
      if (!isEqual(activeTabId, categoryVal?.mohtv_category_uuid)) {
        if (!categoryVal?.mohtv_category_uuid) {
          router.push('/mohtv', undefined, { shallow: true });
        } else {
          router.push(
            {
              pathname: `/mohtv`,
              query: {
                category: categoryVal?.mohtv_category_name,
                category_uuid: categoryVal?.mohtv_category_uuid,
              },
            },
            undefined,
            { shallow: true }
          );
        }
      }
    },
    [activeTabId, router]
  );

  // Memoize categories to prevent unnecessary renders
  const categoryTabs = useMemo(
    () => (
      <ScrollContainer className="category-tabs-scroll-container" style={{ display: 'flex', marginRight: 40 }}>
        {map(mohtvCategories, categoryVal => (
          <TabLabel
            onClick={() => handleTabClick(categoryVal)}
            active={isEqual(categoryVal?.mohtv_category_uuid, activeTabId)}
            key={categoryVal?.mohtv_category_uuid}>
            {categoryVal?.mohtv_category_name}
          </TabLabel>
        ))}
      </ScrollContainer>
    ),
    [mohtvCategories, activeTabId, handleTabClick]
  );

  // Render searchbar once on client
  const searchBarComponent = useMemo(
    () => (
      <SearchBar
        suggestions={searchSuggestions?.data}
        isSearchActive={!isEmpty(searchedShows)}
        clearSuggestion={clearSuggestionHandler}
        getSearchSuggestion={getSearchSuggestionHandler}
      />
    ),
    [searchSuggestions?.data, searchedShows, clearSuggestionHandler, getSearchSuggestionHandler]
  );

  return (
    <SubContainer data-testid="tabs-component">
      <TabsContainer className="tabs">
        <MuiContainer maxWidth="md" style={{ position: 'relative' }}>
          {categoryTabs}
          {searchBarComponent}
        </MuiContainer>
      </TabsContainer>
      <TabPanContainer>
        <ViewAllShows data={subCategoryShows} addMoreData={addMoreData} isLoading={subCategoryShows?.isLoading} />
      </TabPanContainer>
    </SubContainer>
  );
};

TabsComponent.propTypes = {
  mohtvCategories: PropTypes.array,
  activeTabId: PropTypes.string,
  searchSuggestions: PropTypes.object,
  clearSuggestionHandler: PropTypes.func,
  getSearchSuggestionHandler: PropTypes.func,
  searchedShows: PropTypes.object,
  subCategoryShows: PropTypes.object,
  addMoreData: PropTypes.func,
};

// Use memo to prevent unnecessary re-renders
export default memo(TabsComponent);
