import React from "react";
import {
  LabelCardWrapper,
  TitleWrapper,
  DescriptionWrapper,
} from "./index.style";

type LabelCardComponentProps = {
  title: string;
  description?: string;
};

export const LabelCardComponent: React.FC<LabelCardComponentProps> = (
  props
) => {
  const { title, description } = props;

  return (
    <LabelCardWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      {description && <DescriptionWrapper>{description}</DescriptionWrapper>}
    </LabelCardWrapper>
  );
};
