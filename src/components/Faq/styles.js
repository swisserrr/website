import styled from '@emotion/styled';
import Accordion from '@mui/material/Accordion';
import Tabs from '@mui/material/Tabs';
import { css } from '@emotion/react';
import List from '@mui/material/List';

const CustomAccordion = styled(Accordion)`
  margin: 0px 0 !important;
  margin: 0px 0px 10px 0px !important;
  border-radius: 10px !important;
  box-shadow: none;
  background-color: ${({ background }) => (background ? background : 'white')};
`;

const CustomTabs = styled(Tabs)(
  () => css`
    div {
      box-shadow: none;
    }

    .Mui-selected {
      background-color: #cc4746;
      color: #ffffff !important;
    }
    .accorTitle {
      box-shadow: none;
      background: #fff;
    }

    .tabText span.MuiTypography-root {
      font-size: 1.7rem !important;
      font-weight: 500;
    }

    .Mui-expanded span {
      color: red;
    }

    .font-15 {
      font-size: 15px;
    }
    .accorTitle span {
      font-size: 17px !important;
    }

    button {
      border-radius: 3rem;
      font-size: 14px;
      text-transform: none;
      padding: 0 24px;
      margin: 0px 10px;
    }
    span.MuiTabs-indicator {
      display: none;
    }
  `
);

const CustomList = styled(List)(
  () => css`
    padding-top: 0px;
    padding-bottom: 0px;
    p {
      padding: 0rem 0rem;
    }
  `
);

export { CustomAccordion, CustomTabs, CustomList };
