import React, { useState } from "react";
import styled from "styled-components";

type ModalWrapperProps = {
  show: boolean;
};

export const ModalWrapper = styled.div<ModalWrapperProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

export const ModalHeader = styled.div`
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 30px;
`;

export const ModalContent = styled.div`
  background-color: #000000;
  margin: 15% auto;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 70%;
  border-radius: 16px;
  border-left: 1px solid rgba(255, 255, 255, 0.20);
  color: #FFFFFF;
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
