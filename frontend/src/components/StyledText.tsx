import React from 'react';
import { Text, TextProps } from './Themed';

export const MonoText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
};
