import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { LogoContainer, StyledHeader, StyledLogo } from './styles';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <LogoContainer>
        <StyledLogo href="/">Blob Explorer</StyledLogo>
      </LogoContainer>
    </StyledHeader>
  );
}

export default memo(Header, IsEqual);
