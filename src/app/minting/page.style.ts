import styled from "styled-components";

export const MintingFormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 95px;
    flex-direction: column;
    row-gap: 20px;
`;

export const StyledInputWrapper = styled.input.attrs({
  placeholder: "NFT Title"
})`
  min-width: 545px;
  min-height: 59px;
  flex-shrink: 0;

  border-radius: 5px;
  border: 1px solid #9E9E9E;
  background: #383838;

  color: #FFF;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 154.023%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TextWrapper = styled.textarea`
  min-width: 545px;
  min-height: 158px;
  flex-shrink: 0;

  border-radius: 5px;
  border: 1px solid #9E9E9E;
  background: #383838;

  color: #FFF;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 154.023%;
  padding: 20px;
`;

export const ButtonDivWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
`;
