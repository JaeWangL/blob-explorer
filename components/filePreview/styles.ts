import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Card, CardBody, CardFooter } from '@components/index';
import { breakPoints, colors } from '@lib/styles';

export const StyledCard = styled(Card)`
  padding: 10px;
  position: relative;
  border-color: ${colors.border};
  transition: all 0.2s ease-in-out;
  background-color: ${colors.gray900};
  color: ${colors.gray500};

  &:hover,
  &:focus {
    border-color: ${colors.text4};
  }
  span {
    font-size: 12px;
    color: ${colors.text3};
  }
  p {
    margin-bottom: 0;
    color: ${colors.river};
  }
`;

type StyledThumbnailProps = {
  color?: string;
};
export const StyledThumbnail = styled.div<StyledThumbnailProps>`
  background-color: ${colors.darkdarken2};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  position: relative;

  img {
    max-height: 100%;
    object-fit: fill;
  }

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  @media ${breakPoints.smUp} {
    height: 100px;
    font-size: 40px;
  }
  @media ${breakPoints.lgUp} {
    height: 120px;
    font-size: 48px;
  }
`;

export const StyledBody = styled(CardBody)`
  padding: 15px 0 0;

  h6 {
    margin-bottom: 0;
    overflow-wrap: break-word;
  }
`;

export const StyledFooter = styled(CardFooter)`
  font-size: 11px;
  color: ${colors.text4};
  padding: 10px 0 0;
  border-top-width: 0;
  background-color: transparent;
`;

export const StyledMarker = styled.div`
  left: -1px;
  top: -1px;
  position: absolute;
  color: #fff;
  overflow: hidden;
  display: flex;
  width: 45px;
  height: 45px;
  svg {
    width: 16px;
    height: 16px;
    margin-top: calc(30% - 8px);
    margin-left: calc(30% - 8px);
    position: relative;
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    top: -70%;
    left: -70%;
    width: 140%;
    height: 140%;
    background-color: ${colors.warning};
    transform: rotate(45deg);
  }
`;
