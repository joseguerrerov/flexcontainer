import React, { CSSProperties } from 'react';
import {
  AlignContentProperty,
  AlignItemsProperty, AlignSelfProperty,
  FlexDirectionProperty, FlexFlowProperty,
  FlexWrapProperty,
  JustifyContentProperty
} from 'csstype';

export interface IProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flexDirection?: FlexDirectionProperty;
  justifyContent?: JustifyContentProperty;
  alignItems?: AlignItemsProperty;
  flexWrap?: FlexWrapProperty;
  alignContent?: AlignContentProperty;
  flex?: number;
  flexFlow?: FlexFlowProperty;
  order?: number;
  alignSelf?: AlignSelfProperty;
}

const FlexContainer: React.FC<IProps> = ({
  flexDirection, justifyContent, alignSelf, alignItems, alignContent,
  flexFlow, flexWrap, flex, order, ...props
}) => {
  const style: CSSProperties = {
    display: 'flex',
    ...flexDirection && { flexDirection },
    ...justifyContent && { justifyContent },
    ...alignItems && { alignItems },
    ...flexWrap && { flexWrap },
    ...alignContent && { alignContent },
    ...flex && { flex },
    ...flexFlow && { flexFlow },
    ...order && { order },
    ...alignSelf && { alignSelf },
  };
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default FlexContainer;
