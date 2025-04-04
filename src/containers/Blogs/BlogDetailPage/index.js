/* eslint-disable max-len */
/**
 *
 * BlogDetailPage
 *
 */

import React, { Fragment, memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAllDetailBlogs } from '../BlogsHomePage/selectors';
import Grid from '@mui/material/Grid';
import MuiContainer from '@mui/material/Container';
import get from 'lodash/get';
import replace from 'lodash/replace';
import isEqual from 'lodash/isEqual';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  Heading,
  CategoryText,
  CategoryTextNormal,
  ImageContainer,
  CategoryTile,
  CategoryTileSpan,
  // ListContainer,
  // ListItem,
  // ListHeader,
  TagsGrid,
  TabPanContainer,
  CategoryTextContainer,
  DateText,
} from './styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import BlogShowType from 'components/BlogsCardContainer';
import HeaderBar from 'components/HeaderBar';
import ReactHtmlParser from 'react-html-parser';
import { EVENT_NAME } from 'constants/constants';
import { pushEvent, utmDataHandler } from 'utils/cleverTap';
const Footer = dynamic(() => import('components/Footer'));

export function BlogDetailPage({ blogDetailPage }) {
  const router = useRouter();
  dayjs.extend(advancedFormat);

  useEffect(() => {
    pushEvent(EVENT_NAME.PAGE_VIEWED, {
      ...{ source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath },
      ...utmDataHandler(router.query),
    });
  }, [router]);

  useEffect(() => {
    AOS.init({ once: true, duration: 300, disable: 'mobile' });
  }, []);

  return (
    <>
      <Head>
        {Object.keys(get(blogDetailPage, 'blogData.yoast_head_json', {})).map((data, index) => {
          if (data === 'title') {
            return <title key={index}>{get(blogDetailPage, 'blogData.yoast_head_json')[data]}</title>;
          }
          if (data === 'description') {
            return (
              <meta key={index} name="description" content={get(blogDetailPage, 'blogData.yoast_head_json')[data]} />
            );
          }
          if (data === 'robots') {
            let content = '';
            Object.keys(get(blogDetailPage, 'blogData.yoast_head_json')[data]).map(obj => {
              content += get(blogDetailPage, 'blogData.yoast_head_json')[data][obj] + ', ';
            });

            return <meta key={index} name="robots" content={content} />;
          }
          if (
            typeof get(blogDetailPage, 'blogData.yoast_head_json')[data] === 'object' ||
            Array.isArray(get(blogDetailPage, 'blogData.yoast_head_json')[data])
          ) {
            if (data === 'twitter_misc') {
              const twitter = Object.keys(get(blogDetailPage, 'blogData.yoast_head_json')[data]).map((obj, i) => {
                return (
                  <Fragment key={index}>
                    <meta name={`twitter:label${i + 1}`} content={obj} />
                    <meta
                      name={`twitter:data${i + 1}`}
                      content={get(blogDetailPage, 'blogData.yoast_head_json')[data][obj]}
                    />
                  </Fragment>
                );
              });
              return twitter;
            }
            if (data === 'og_image') {
              const ogimage = Object.keys(get(blogDetailPage, 'blogData.yoast_head_json')[data][0]).map(obj => {
                return (
                  <meta
                    key={index}
                    name={`og:image:${obj}`}
                    content={get(blogDetailPage, 'blogData.yoast_head_json')[data][0][obj]}
                  />
                );
              });
              return ogimage;
            }
            return;
          }
          if (data === 'canonical') {
            return;
          }
          return (
            <meta
              key={index}
              name={data.replace('_', ':')}
              content={replace(get(blogDetailPage, 'blogData.yoast_head_json')[data], 'testing.emoha.com', 'emoha.com')}
            />
          );
        })}
        <style>{`
          body {
	        color: #333 !important;
	        font-family: "Lato", "Helvetica Neue", helvetica, arial, sans-serif !important;
	        font-weight: 400 !important;
	        font-size: 15px !important;
	        line-height: 1.8 !important;
	        max-width:100% !important;
	        vertical-align: baseline !important;
          }
          a {border-bottom: 0px !important}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				clear: both !important;
				font-weight: 700 !important;
				margin: 56px 0 28px;
			}

			h1 {
				font-size: 30px !important;
				line-height: 1.2308 !important;
			}

			h2 {
				font-size: 26px !important;
				line-height: 1.2069 !important;
			}

			h3 {
				font-size: 24px !important;
				line-height: 1.1667 !important;
			}

			h4 {
				font-size: 22px;
				line-height: 1.4;
			}

			h5 {
				font-size: 20px !important;
				letter-spacing: 0.1em !important;
				line-height: 1.2353 !important;
				text-transform: uppercase !important;
			}
			h6 {
				font-size: 18px !important ;
				letter-spacing: 0.1em !important ;
				line-height: 1.2353 !important ;
				text-transform: uppercase !important;
			}

			h1:first-child,
			h2:first-child,
			h3:first-child,
			h4:first-child,
			h5:first-child,
			h6:first-child {
				margin-top: 0 !important ;
			}

			p {
				margin: 0 0 20px !important ;
			}

			b,
			strong {
				font-weight: 700 !important ;
			}

			dfn,
			cite,
			em,
			i {
				font-style: italic !important ;
			}

			blockquote {
				border-left: 4px solid #333 !important ;
				color: #333 !important ;
				font-size: 16px !important ;
				font-style: italic !important ;
				line-height: 28px !important ;
				letter-spacing: 0.5px !important ;
				margin-bottom: 40px !important;
				padding: 20px 20px 0 !important;
			}

			blockquote > blockquote {
				margin-left: 0 !important ;
			}

			blockquote p {
				margin-bottom: 35px !important;
			}

			blockquote > p:last-child {
				margin-bottom: 0 !important;
			}

			blockquote cite,
			blockquote small {
				color: #333 !important ;
				font-family: "Noto Sans", sans-serif !important;
				font-size: 17px !important ;
				line-height: 1.6471 !important ;
			}

			blockquote em,
			blockquote i,
			blockquote cite {
				font-style: normal !important;
			}

			blockquote strong,
			blockquote b {
				font-weight: 400 !important;
			}

			address {
				font-style: italic !important;
				margin: 0 0 28px !important;
			}

			code,
			kbd,
			tt,
			var,
			samp,
			pre {
				font-family: Inconsolata, monospace !important;
			}

			pre {
				background-color: #fcfcfc !important;
				border: 1px solid #eaeaea !important;
				font-size: 17px !important;
				line-height: 1.2353 !important;
				margin-bottom: 28px !important;
				max-width: 100% !important;
				overflow: auto !important;
				padding: 14px !important;
				white-space: pre !important;
				white-space: pre-wrap !important;
				word-wrap: break-word !important;
			}

			abbr[title] {
				border-bottom: 1px dotted #eaeaea !important;
				cursor: help !important;
			}

			mark,
			ins {
				background-color: #fff9c0 !important;
				text-decoration: none !important;
			}

			sup,
			sub {
				font-size: 75% !important;
				height: 0 !important;
				line-height: 0 !important;
				position: relative !important;
				vertical-align: baseline !important;
			}

			sup {
				bottom: 1ex !important;
			}

			sub {
				top: .5ex !important;
			}

			small {
				font-size: 75% !important;
			}

			big {
				font-size: 125% !important;
			}


			/**
			 * 3.0 Elements
			 */

			hr {
				background-color: #eaeaea !important;
				border: 0 !important;
				height: 1px !important;
				margin-bottom: 28px !important;
			}

			div > ul,
			div > ol {
				margin: 0 0 28px 28px !important;
				padding: 0 !important;
			}

			ul > li {
				list-style-type: disc !important;
			}

			ol>li{
				list-style-type:auto;	
			}
		

			li > ul,
			li > ol {
				margin: 0 0 0 23px !important;
			}

			dl {
				margin: 0 0 28px !important;
			}

			dt {
				font-weight: bold !important;
			}

			dd {
				margin: 0 0 28px !important;
			}

			table,
			th,
			td,
			.mce-item-table,
			.mce-item-table th,
			.mce-item-table td {
				border: 1px solid #eaeaea;
			}

			table a {
				color: #333;
			}

			table,
			.mce-item-table {
				border-collapse: separate !important;
				border-spacing: 0 !important;
				border-width: 1px 0 0 1px !important;
				margin: 0 0 28px !important;
				width: 100% !important;
			}

			table th,
			.mce-item-table th,
			table caption {
				border-width: 0 1px 1px 0 !important;
				font-family: 'Lato', sans-serif !important;
				font-size: 17px !important;
				font-weight: 700 !important;
				padding: 7px !important;
				text-align: left !important;
				vertical-align: baseline !important;
			}

			table td,
			.mce-item-table td {
				border-width: 0 1px 1px 0 !important;
				font-family: 'Lato', sans-serif !important;
				font-size: 17px !important;
				padding: 7px !important;
				vertical-align: baseline !important;
			}

			img {
				border: 0 !important;
				max-width: 100% !important;
				vertical-align: middle !important;
				height:auto;
			}

			figure {
				margin: 0 !important;
			}

			del {
				opacity: 0.8 !important;
			}

			a {
				text-decoration: none !important;
			}


			.alignleft {
				float: left !important;
				margin: 7px 28px 28px 0; !important
			}

			.alignright {
				float: right !important;
				margin: 7px 0 28px 28px !important;
			}

			.aligncenter {
				clear: both !important;
				display: block !important;
				margin: 7px auto !important;
			}



			.wp-caption {
				background: transparent !important;
				border: none !important;
				color: #707070 !important;
				font-family: "Noto Sans", sans-serif !important;
				margin: 0 0 28px 0 !important;
				max-width: 100% !important;
				padding: 0 !important;
				text-align: inherit !important;
			}

			.wp-caption.alignleft {
				margin: 7px 28px 21px 0 !important;
			}

			.wp-caption.alignright {
				margin: 7px 0 21px 28px !important;
			}

			.wp-caption.aligncenter {
				margin: 7px auto !important;
			}

			.wp-caption .wp-caption-text,
			.wp-caption-dd {
				font-size: 14px !important;
				line-height: 1.5 !important;
				padding: 7px 0 !important;
			}

			.gallery-item {
				display: inline-block !important;
				padding: 1.79104477% !important;
				text-align: center !important;
				vertical-align: top !important;
				width: 100% !important;
			}

			.gallery-columns-2 .gallery-item {
				max-width: 50% !important;
			}

			.gallery-columns-3 .gallery-item {
				max-width: 33.33% !important;
			}

			.gallery-columns-4 .gallery-item {
				max-width: 25% !important;
			}

			.gallery-columns-5 .gallery-item {
				max-width: 20% !important;
			}

			.gallery-columns-6 .gallery-item {
				max-width: 16.66% !important;
			}

			.gallery-columns-7 .gallery-item {
				max-width: 14.28% !important;
			}

			.gallery-columns-8 .gallery-item {
				max-width: 12.5% !important;
			}

			.gallery-columns-9 .gallery-item {
				max-width: 11.11% !important;
			}

			.gallery .gallery-caption {
				color: #707070 !important;
				display: block !important;
				font-family: "Noto Sans", sans-serif !important;
				font-size: 14px !important;
				line-height: 1.5 !important;
				padding: 7px 0 !important;
			}

			.gallery-columns-6 .gallery-caption,
			.gallery-columns-7 .gallery-caption,
			.gallery-columns-8 .gallery-caption,
			.gallery-columns-9 .gallery-caption {
				display: none !important;
			}


			.mce-content-body .wpview-wrap {
				margin-bottom: 32px !important;
			}

			.mce-content-body .wp-audio-playlist {
				margin: 0 !important;
			}
        `}</style>
        <link rel="canonical" href={`https://emoha.com${router.asPath}`} />
      </Head>
      <Container>
        <HeaderBar position="relative" backgroundColor={'rgba(0, 0, 0, 0.5)'} />
        <Grid container>
          <MuiContainer>
            <CategoryTextContainer>
              <CategoryText href={`/blogs/${get(blogDetailPage, 'category.slug')}`}>
                {get(blogDetailPage, 'category.name')}
              </CategoryText>
              <span>{` > `}</span>
              <CategoryTextNormal
                href=""
                dangerouslySetInnerHTML={{ __html: get(blogDetailPage, 'blogData.title.rendered') }}
              />
            </CategoryTextContainer>
            <DateText>{dayjs(get(blogDetailPage, 'blogData.date')).format('Do MMM YYYY')}</DateText>
            <ImageContainer>
              <img
                src={get(blogDetailPage, 'blogImageData.source_url')}
                style={{ height: '100%', objectFit: 'cover' }}
                width="100%"
                alt={get(blogDetailPage, 'blogImageData.alt_text')}
              />
            </ImageContainer>

            <Grid container>
              <TagsGrid item md={2} xs={12}>
                <CategoryTile>
                  <CategoryTileSpan>{get(blogDetailPage, 'category.name')}</CategoryTileSpan>
                </CategoryTile>
                {/* <ListHeader>IN THIS ARTICLE</ListHeader>
                <ListContainer>
                  {map(get(blogDetailPage, 'tags'), data => {
                    return <ListItem key={data.id}>{data.name}</ListItem>;
                  })}
                </ListContainer> */}
              </TagsGrid>
              <Grid size md={10} xs={12}>
                <Heading dangerouslySetInnerHTML={{ __html: get(blogDetailPage, 'blogData.title.rendered') }} />
                {ReactHtmlParser(get(blogDetailPage, 'blogData.content.rendered'))}
              </Grid>
            </Grid>
          </MuiContainer>
        </Grid>

        <TabPanContainer>
          <BlogShowType
            disableRem
            data={[
              {
                show_type: 'Blogs you may like',
                catSlug: router?.query?.categories,
                data: get(blogDetailPage, 'categoryData', []),
              },
            ]}
          />
        </TabPanContainer>

        <Footer />
      </Container>
    </>
  );
}

BlogDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  blogDetailPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  blogDetailPage: makeSelectAllDetailBlogs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(BlogDetailPage);
