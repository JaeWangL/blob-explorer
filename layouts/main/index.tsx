import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useRecoilValueLoadable } from 'recoil';
import { containerNamesSelector } from '@lib/recoil';
import Footer from './footer';
import MenuLeft from './menuLeft';
import { MainContainer, MainWrapper } from './styles';

type MainLayoutProps = {
  children: JSX.Element;
};

function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;
  const containers = useRecoilValueLoadable(containerNamesSelector);

  if (containers.state === 'loading') {
    return <p>Loading...</p>;
  }
  if (containers.state === 'hasError') {
    return <p>Error...</p>;
  }
  return (
    <div>
      <MainWrapper className="wrapper">
        <MenuLeft isShow />
        <MainContainer isShowMenu>{children}</MainContainer>
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default memo(MainLayout, IsEqual);
