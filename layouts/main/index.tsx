import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useRecoilValueLoadable } from 'recoil';
import { containerNamesSelector } from '@lib/recoil';
import Footer from './footer';
import Header from './header';
import MenuLeft from './menuLeft';
import { MainContainer, MainWrapper } from './styles';

type MainLayoutProps = {
  children: JSX.Element;
  showFooter?: boolean;
};

function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children, showFooter } = props;
  const containers = useRecoilValueLoadable(containerNamesSelector);

  if (containers.state === 'loading') {
    return <p>Loading...</p>;
  }
  if (containers.state === 'hasError') {
    return <p>Error...</p>;
  }
  return (
    <>
      <Header />
      <MainWrapper className="wrapper">
        <MenuLeft isShow />
        <MainContainer isShowMenu>{children}</MainContainer>
      </MainWrapper>
      {showFooter && <Footer />}
    </>
  );
}

MainLayout.defaultProps = {
  showFooter: false,
} as MainLayoutProps;

export default memo(MainLayout, IsEqual);
