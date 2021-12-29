import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakPoints, colors, defaultTheme } from '@lib/styles';

type MenuWrapperProps = {
  isShow: boolean;
};
export const MenuWrapper = styled.div<MenuWrapperProps>`
  background-color: ${colors.darkdarken5};
  position: absolute;
  top: 0;
  bottom: 0;
  left: -240px;
  width: 240px;
  border-right: 1px solid ${colors.border};
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  @media ${breakPoints.lgUp} {
    left: 0;
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 991.98px) {
    ${(props) =>
      props.isShow &&
      css`
        left: 0;
        visibility: visible;
        opacity: 1;
      `}
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 9;
  background-color: ${colors.darkdarken3};

  button {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
    font-family: ${defaultTheme.fonts.interUi};
    letter-spacing: 0.5px;
  }
  .btn-white {
    font-weight: 700;
  }
  .dropdown {
    flex: 1 1 auto;
    &:last-child {
      margin-left: 10px;
    }
    &-menu {
      font-size: 13px;
      border-width: 0;
      background-color: ${colors.darklighten8};
    }
    &-item {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      color: ${colors.gray300};
      svg {
        width: 16px;
        height: 16px;
        margin-right: 10px;
      }
      span {
        display: block;
        position: relative;
        top: 1.5px;
      }

      &:hover,
      &:focus {
        background-color: ${colors.darklighten3};
        color: #fff;
      }
    }
    &-divider {
      margin: 10px 15px;
    }
  }
`;

export const BodyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${colors.gray500};

  .nav-link {
    color: ${colors.gray500};
    &:hover,
    &:focus {
      background-color: ${colors.gray900};
      color: #fff;
    }
    &.active {
      background-color: ${colors.darklighten2};
    }
  }
`;
