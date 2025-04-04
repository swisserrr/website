import styled from '@emotion/styled';

import { css } from '@emotion/react';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

const CustomReactPlayer = styled(ReactPlayer)(
  () => css`
    width: auto !important;
    height: 100% !important;
  `
);

export { CustomReactPlayer };
