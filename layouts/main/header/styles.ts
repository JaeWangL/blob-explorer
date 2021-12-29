import Link from 'next/link';
import styled from '@emotion/styled';
import { colors, breakPoints } from '@lib/styles';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: stretch;
  height: 55px;
  padding: 0;
  justify-content: flex-start;
  background-color: ${colors.gray900};

  @media ${breakPoints.lgUp} {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`;

export const LogoContainer = styled.div`
  padding-top: 0.33594rem;
  padding-bottom: 0.33594rem;
  margin-right: 1rem;
  font-size: 1.09375rem;
  line-height: inherit;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-right: 0;
  order: 1;

  @media ${breakPoints.lgUp} {
    width: 240px;
    padding: 0 0 0 20px;
  }
`;

export const StyledLogo = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -1px;
  color: inherit;
  display: flex;
  align-items: center;
  position: relative;
  color: ${colors.white};
  margin-top: -4px;

  span {
    display: inline-block;
    font-weight: 400;
    color: ${colors.primary};
  }

  @media ${breakPoints.smUp} {
    font-size: 22px;
  }
  @media ${breakPoints.lgUp} {
    font-size: 24px;
  }
`;
