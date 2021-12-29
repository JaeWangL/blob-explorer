import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { BodyWrapper, MenuWrapper, HeaderWrapper } from './styles';

type MenuLeftProps = {
  isShow: boolean;
};

function MenuLeft(props: MenuLeftProps): JSX.Element {
  const { isShow } = props;

  return (
    <MenuWrapper isShow={isShow}>
      <HeaderWrapper>
        <p>Header</p>
      </HeaderWrapper>
      <BodyWrapper>
        <p>Body</p>
      </BodyWrapper>
    </MenuWrapper>
  );
}

export default memo(MenuLeft, IsEqual);
