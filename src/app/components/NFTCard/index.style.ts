import styled from "styled-components";

export const NFTCardWrapper = styled.div`

  display: flex;
  width: 100%;
  height: 325px;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(8px);
  flex-direction: column;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const NFTImageWrapper = styled.div`
  height: 214.915px;
  flex-shrink: 0;

  border-radius: 5px;
  background: linear-gradient(90deg, #FFF 54.37%, #B8B8B8 111.49%);
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NFTTitleWrapper = styled.div`
  color: #FFF;
  font-family: Cinzel;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 146.523%;
  margin-top: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;