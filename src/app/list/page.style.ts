import styled from "styled-components";

export const NFTGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
    column-gap: 10px;
    margin-top: 50px;
    justify-items: center;
`;

export const NFTImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 371.969px;
  height: 385.463px;
  flex-shrink: 0;

  border-radius: 5px;
  background: linear-gradient(90deg, #FFF 54.37%, #B8B8B8 111.49%);
`;

export const NFTTitleWrapper = styled.div`
  color: #FFF;
  font-family: Cinzel;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 146.523%;
`;

export const NFTDescWrapper = styled.div`
  color: #FFF;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 154.023%;
  text-transform: uppercase;
  margin-top: 16px;
`;

export const NFTDescriptionWrapper = styled.div`
  color: #FFF;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 154.023%;
  opacity: 0.7;
  margin-top: 4px;
  border-bottom: solid 1px;
  padding-bottom: 16px;
`;