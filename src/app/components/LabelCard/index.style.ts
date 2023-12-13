import styled from "styled-components";

export const LabelCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(8px);
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  font-family: Cinzel;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 146.523%;
  align-items: center;

  background: linear-gradient(90deg, #E7E7E7 1.14%, #9E9E9E 28.83%, #F2F2F2 57.49%, #949494 89.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DescriptionWrapper = styled.div`
  width: 560px;
  height: 52.26px;
  flex-shrink: 0;

  color: #FFF;
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 154.023%;
  opacity: 0.7;
`;