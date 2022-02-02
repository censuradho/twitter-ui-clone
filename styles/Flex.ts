import styled, { css } from 'styled-components';

interface FlexProps {
  column?: boolean;
  flex?: number;
  wrap?: boolean;
  maxWidth?: number | string;
  width?: number;
  justifyContent?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  gap?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number | 'auto';
  marginBottom?: number | 'auto';
  marginLeft?: number | 'auto';
  marginRight?: number | 'auto';
  fullWidth?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  flex: ${props => props.flex || 'stretch'};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  gap: ${props => `${props.gap}rem` || 'stretch'};

  position: relative;
  max-width: ${({ maxWidth }) =>
    maxWidth ? (typeof maxWidth === 'string' ? maxWidth : `${maxWidth}rem`) : 'none'};
  width: ${props => props.fullWidth ? '100%' : 'auto'}
`;
