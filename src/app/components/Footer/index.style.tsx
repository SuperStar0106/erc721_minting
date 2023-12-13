"use client";

import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  min-height: 70px;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

export const WhiteLabelWrapper = styled.div`
  color: #fff;
  font-family: Cinzel;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 146.523%;
`;

export const GradientLabelWrapper = styled.div`
  background: var(
    --Linear-Main,
    linear-gradient(90deg, #627eea 54.37%, #ec4467 111.49%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Cinzel;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 146.523%;
`;
