import styled from '@emotion/styled';

const CustomTab = styled.button`
  padding: 0px;
  scroll-snap-align: start;
`;
const CustomContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  gap: 30px;
`;
export { CustomTab, CustomContainer };
