import styled from "styled-components";

type ConnectButtonWrapper = {
  active: boolean;
};

export const ConnectButtonWrapper = styled.button<ConnectButtonWrapper>`
  display: ${(props) => props.active ? 'block' : 'flex'};
  padding: 10px 24px 10px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 10px;
  border: 1px solid var(--blacks-black-20, rgba(17, 20, 59, 0.20));
  background: #282828;
  flex-direction: row;

  color: #FFF;

  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Open Sans;
  font-size: ${(props) => props.active ? 'small' : '20px'};
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.3px;

  &:hover {
    cursor: pointer;
    background: #383838;
  }
`;