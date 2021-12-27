import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { useRecoilValueLoadable } from 'recoil';
import { containerNamesSelector } from '@lib/recoil';

type MainLayoutProps = {
  children: JSX.Element;
};

function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;
  const containers = useRecoilValueLoadable(containerNamesSelector);

  if (containers.state === 'loading') {
    return <p>Loading...</p>;
  }
  return children;
}

export default memo(MainLayout, IsEqual);
