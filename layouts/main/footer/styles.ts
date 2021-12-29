import styled from '@emotion/styled';
import { breakPoints, colors, defaultTheme } from '@lib/styles';

export const StyledFooter = styled.footer`
  font-size: 10px;
  font-family: ${defaultTheme.fonts.interUi};
  letter-spacing: 0.3px;
  padding: 15px 25px;
  background-color: ${colors.gray900};
  color: ${colors.gray950};
  text-transform: uppercase;

  a {
    color: ${colors.gray500};
    &:hover,
    &:focus {
      color: #fff;
    }
  }

  @media ${breakPoints.lgUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const StyledFooterLeft = styled.div`
  margin-top: 10px;

  a {
    padding: 0;
    color: ${colors.text2};
  }
  .copright-link {
    display: inline-flex;
    a {
      margin-left: 2px;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    color: ${colors.danger};
    margin: 0 5px;
  }

  @media ${breakPoints.mdUp} {
    margin-top: 0;
  }
`;

export const StyledFooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const StyledFotterNavLink = styled.a`
  padding: 0;
  color: ${colors.text2};
  display: block;

  &:not(:first-of-type) {
    margin-left: 25px;
  }
  &:hover {
    color: ${colors.primary};
  }
`;
