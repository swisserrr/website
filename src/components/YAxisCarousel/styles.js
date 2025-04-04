import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const CustomContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CustmBox = styled.div`
  z-index: 2;
  height: 75vh;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  top: 15rem;
  background-color: #f8f8f8;
  @media (max-width: 600px) {
    height: 90vh;
    top: 8rem;
    overflow: hidden;
  }
`;
const CustomGrid = styled(Grid)(
  `display: flex;
  justify-content: center;
`
);

export { CustmBox, CustomContainer, CustomGrid };
