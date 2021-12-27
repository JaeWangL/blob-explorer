import styled from '@emotion/styled';
import { breakPoints, colors } from '@lib/styles';

export const MainWrapper = styled.div`
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;

  @media ${breakPoints.lgUp} {
    top: 60px;
  }
`;

type MainContainerProps = {
  showSidebar: boolean;
};
export const MainContainer = styled.div<MainContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s;
  background-color: ${colors.darkdarken5};

  @media ${breakPoints.lgUp} {
    left: 240px;
  }
  @media (max-width: 991.98px) {
    ${(props) => props.showSidebar ?? 'transform: translateX(240px)'}
  }
`;

export const ContentContainer = styled.div`
  background-color: ${colors.darkdarken5};
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  padding: 20px;

  @media ${breakPoints.lgUp} {
    padding: 25px;
  }
  @media ${breakPoints.xlUp} {
    padding: 30px;
    max-width: 1140px;
  }
`;

export const TextHeading = styled.h4`
  margin-bottom: 15px;

  @media ${breakPoints.lgUp} {
    margin-bottom: 25px;
  }
`;
