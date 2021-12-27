import { memo } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import IsEqual from 'react-fast-compare';

type CustomScrollBarProps = {
  children: JSX.Element;
};

function CustomScrollBar(props: CustomScrollBarProps): JSX.Element {
  const { children } = props;

  return <Scrollbars>{children}</Scrollbars>;
}

export default memo(CustomScrollBar, IsEqual);
