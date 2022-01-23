import color from 'color';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@lib/styles';

export const StyledDropdown = styled.div`
  position: relative;
`;

type StyledDropMenuProps = {
  isShow?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  menuWidth?: number;
};
export const StyledDropMenu = styled.div<StyledDropMenuProps>`
  position: absolute;
  will-change: transform;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  font-size: 0.875rem;
  color: ${colors.text};
  text-align: left;

  background-color: ${color(colors.gray900).lighten(0.5).rgb().string()};
  background-clip: padding-box;
  border-radius: 0.25rem;
  box-shadow: 0 0 8px 2px rgb(28 39 60 / 4%);
  padding: 5px;

  ${({ isShow }) =>
    isShow &&
    css`
      display: block;
    `}

  ${({ direction }) =>
    direction === 'down' &&
    css`
      top: 100%;
      left: 0px;
      margin-top: 0.125rem;
    `}

    ${({ direction }) =>
    direction === 'up' &&
    css`
      left: 0px;
      bottom: 100%;
      margin-bottom: 0.125rem;
    `}

    ${({ direction, menuWidth }) =>
    direction === 'left' &&
    css`
      transform: translate3d(-${menuWidth}px, 0px, 0px);
      top: 0px;
      left: 0px;
      margin-right: 0.125rem;
    `}
    ${({ direction, menuWidth }) =>
    direction === 'right' &&
    css`
      transform: translate3d(${menuWidth}px, 0px, 0px);
      top: 0px;
      right: 0px;
      margin-left: 0.125rem;
    `}
`;
