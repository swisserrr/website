/* Styles for RequestLocation container module */
import styled from '@emotion/styled';

const RequestLocationWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background-image: url('/static/images/locationMobile.png'); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */ /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  padding: 30px;
  border-radius: 15px;
  @media (min-width: 768px) {
    width: 50vw;
    height: 50vh;
    margin: 0px auto;
  }
`;
const HeadingPara = styled.div`
  font-size: 10vw;
  margin-top: 30px;
  line-height: 50px;
  font-weight: 600;
  color: #002745;
`;
const CustomPata = styled.div`
  font-size: 6vw;
  margin-top: 10px;
  line-height: 40px;
  font-weight: 600;
`;

export { RequestLocationWrapper, HeadingPara, CustomPata };
