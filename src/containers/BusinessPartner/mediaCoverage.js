import React from 'react';
import HomePageBox from 'components/HomePageBox';
import Container from '@mui/material/Container';
import HomePageText from 'components/HomePageText';
import HomePageButton from 'components/HomePageButton';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { pushEvent } from 'utils/cleverTap';
import { EVENT_NAME } from 'constants/constants';
import { isEqual } from 'lodash';

const ImageCarousel = dynamic(() => import('components/ImageCarousel'), { ssr: false });

const imageCarouselData = [
  {
    id: 1,
    uuid: '61850ff0-a3e5-4013-a877-37361b15b5ea',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/838b0571-c7a0-48de-b53c-1a9559d23037_Group33663.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/838b0571-c7a0-48de-b53c-1a9559d23037_Group33663.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064917Z&X-Amz-Expires=604800&X-Amz-Signature=936bb7cf778864d32c5e3e19594ad4311ded354a997d707ba52aa4e7465bb409&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 2,
    uuid: '4cea2869-bb1a-47df-ab81-6cbc5c1d5bed',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/4060d1aa-0b75-47b9-ba15-33e52da714d1_Group33458.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/4060d1aa-0b75-47b9-ba15-33e52da714d1_Group33458.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064917Z&X-Amz-Expires=604800&X-Amz-Signature=770394f07f9477fdc06a0c9c485689f540dcdfe288ad3245c533ea52ed453cb9&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 3,
    uuid: '5aeb55cd-77e4-459e-9543-6272ce45c932',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/a6dd10f4-9f80-4d4f-ae18-f8e7d3c93adb_Group33459.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/a6dd10f4-9f80-4d4f-ae18-f8e7d3c93adb_Group33459.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064917Z&X-Amz-Expires=604800&X-Amz-Signature=833c9701f7f11b76df7a9f35c7576e77767c08d408e7bc27930fa57a08c9dbbd&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 4,
    uuid: '2d132034-2282-4dc5-97b0-05855c6e1b4b',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/7d6e96b4-e946-4c4c-a07a-b5dae10a0e5f_Group33664.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/7d6e96b4-e946-4c4c-a07a-b5dae10a0e5f_Group33664.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064917Z&X-Amz-Expires=604800&X-Amz-Signature=bffbe43d0847b4a835eff3775d766b2ec0c23cb507b5bcc1bf1ab7d0a816144c&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 5,
    uuid: '6391a66e-287d-46a9-8f2e-0fe7600736a0',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/1dd541c2-6724-4bc5-82cd-8c1db93f4a03_Group33659.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/1dd541c2-6724-4bc5-82cd-8c1db93f4a03_Group33659.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064917Z&X-Amz-Expires=604800&X-Amz-Signature=05443b954f789266388fa8301c5e1338ddf6089cc3db95486c3ef0cbfc9c98ae&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 6,
    uuid: 'c158bb4f-95b7-42d0-b6f6-95e5922a4788',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/edaf919d-fca7-4f54-8dc3-fd1e2b27643e_Group33665.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/edaf919d-fca7-4f54-8dc3-fd1e2b27643e_Group33665.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064918Z&X-Amz-Expires=604800&X-Amz-Signature=71b18dbf63a2671bf9309cd76252cc9eecff85daf9e4ca8cd55dcaafcf5cd9fc&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 7,
    uuid: 'c73abbac-5ae6-411a-ba1f-a960f6c14a43',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/5a00c944-a141-42bb-bb0a-500f027de306_Group33692.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/5a00c944-a141-42bb-bb0a-500f027de306_Group33692.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064918Z&X-Amz-Expires=604800&X-Amz-Signature=3fa36fa81f92f2d4734268edcf8478c567844ab7b92135d58f1e865a446084f0&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
  {
    id: 8,
    uuid: '6bb044a4-ff8a-48eb-8b49-41ab845e07b4',
    image_url: 'https://d2ts1vii79fe9b.cloudfront.net/aws_gallery/a3326fd3-1122-4ae4-9a3e-d9f3c122825e_Group33693.webp',
    created_at: '2023-04-07 04:49:02',
    updated_at: '2023-04-07 04:49:02',
    image_signed_url:
      'https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com/aws_gallery/a3326fd3-1122-4ae4-9a3e-d9f3c122825e_Group33693.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXSFBLWKUHWUMEGUF%2F20230515%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230515T064918Z&X-Amz-Expires=604800&X-Amz-Signature=013936b1eb373530d4cf4c077472d20ccf4865cdfb1e14519fc55427288be9c8&X-Amz-SignedHeaders=host',
    image_signed_url_expire_at: '2023-05-20 12:19:12',
  },
];

const MediaCoverage = ({ media_coverage }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const router = useRouter();

  const handleViewAll = (href, blockName) => {
    pushEvent(EVENT_NAME.VIEW_ALL, {
      block_name: blockName,
      source_url: isEqual(router.asPath, '/') ? '/Home' : router.asPath,
    });
    router.push(href);
  };

  return (
    <>
      <HomePageBox
        backgroundColor={{ xs: media_coverage ? '#F4F1EB' : '#F8F8F8', md: media_coverage ? '#F4F1EB' : '#F8f8f8' }}>
        <Container maxWidth="lg" sx={{ padding: { xs: '0' } }}>
          <HomePageBox padding={{ xs: '2.3rem 0 0 0', md: '3rem 0 0 0' }}>
            <HomePageBox
              padding={{ xs: '0rem 3.8rem 1.2rem 3.8rem', md: '0rem 1rem 5.0rem 1rem' }}
              color={{ xs: '#ffffff', md: '#ffffff' }}
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <HomePageText
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                fontWeight={{ xs: '600', md: '600' }}
                variant={'h2'}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                lineHeight={{ xs: '4.6rem', md: '5.8rem' }}>
                Media coverage
              </HomePageText>
              <HomePageButton
                variant="text"
                color={{ xs: '#1A1A1A', md: '#1A1A1A' }}
                textTransform={{ xs: 'none !important', md: 'none !important' }}
                backgroundColor={{ xs: 'transparent', md: 'transparent' }}
                letterSpacing={{ xs: '-0.01em', md: '-0.01em' }}
                fontSize={{ xs: '1.3rem', md: '1.5rem' }}
                onClick={() => handleViewAll(media_coverage ? '/business-partner/media' : '/media', 'Media coverage')}>
                View all &#8594;
              </HomePageButton>
            </HomePageBox>
            <HomePageBox height={{ md: '44rem', xs: '40rem' }} overflow="hidden">
              <ImageCarousel
                centerPadding="15%"
                dataSet={media_coverage || imageCarouselData}
                height={matches ? '40rem' : '44rem'}
                width="100%"
                padding={{ md: '0 10px 0 0' }}
                margin={{ xs: '0 15px', md: '0 0 0 0' }}
                slides={{ md: 4 }}
              />
            </HomePageBox>
          </HomePageBox>
        </Container>
      </HomePageBox>
    </>
  );
};

export default MediaCoverage;
