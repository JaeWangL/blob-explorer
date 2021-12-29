import Link from 'next/link';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { LogoContainer, StyledHeader, StyledLogo } from './styles';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <LogoContainer>
        <Link href="/" passHref>
          <StyledLogo>
            Blob<span>&nbsp;Explorer</span>
          </StyledLogo>
        </Link>
      </LogoContainer>
    </StyledHeader>
  );
}

export default memo(Header, IsEqual);
