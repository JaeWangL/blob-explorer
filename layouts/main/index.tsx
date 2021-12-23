import { memo } from 'react';
import IsEqual from 'react-fast-compare';

type MainLayoutProps = {
  children: JSX.Element;
};

function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;

  return children;
}

export default memo(MainLayout, IsEqual);
