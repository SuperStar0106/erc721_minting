import styled from "styled-components";

type SidebarProps = {
  isOpen: boolean;
};

export const SidebarWrapper = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ isOpen }) => (isOpen ? '398px' : '0')};
  height: 100vh;
  background-color: #000;
  transition: width 0.3s ease-in-out;
  overflow-x: hidden;
  color: #FFF;
`;

export const CloseButton = styled.span`
  float: right;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const InnerDivWrapper = styled.div<SidebarProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-right: 29px;
  padding-left: 29px;
  padding-top: 35px;
`;

export const SidebarHeaderWrapper = styled.div`
  color: #FFF;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 146.523%;
`;

export const SidebarContentWrapper = styled.div`
  color: #FFF;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 146.523%;

  display: flex;
  row-gap: 27px;
  flex-direction: column;
  margin-top: 27px;
`;

export const GradientTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.266px;
  text-decoration-line: underline;

  background: var(--Linear-Main, linear-gradient(90deg, #627EEA 54.37%, #EC4467 111.49%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;