"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 114px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
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
