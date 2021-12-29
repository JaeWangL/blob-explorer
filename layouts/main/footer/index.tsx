import { memo } from 'react';
// @ts-ignore
import FeatherIcon from 'feather-icons-react';
import IsEqual from 'react-fast-compare';
import { StyledFooter, StyledFooterLeft, StyledFooterNav, StyledFotterNavLink } from './styles';

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <StyledFooterLeft>
        <span>&copy; Doar {new Date().getFullYear()} </span>
        <span className="copright-link">
          MADE WITH <FeatherIcon icon="heart" size={24} /> BY{'  '}
          <a href="https://themeforest.net/user/bootxperts/portfolio" target="_blank" rel="noopener noreferrer">
            BootXperts
          </a>
        </span>
      </StyledFooterLeft>
      <div>
        <StyledFooterNav>
          <StyledFotterNavLink href="https://themeforest.net/licenses/standard">Licenses</StyledFotterNavLink>
          <StyledFotterNavLink href="/">Change Log</StyledFotterNavLink>
          <StyledFotterNavLink href="https://hasthemes.com/contact-us/">Get Help</StyledFotterNavLink>
        </StyledFooterNav>
      </div>
    </StyledFooter>
  );
}

export default memo(Footer, IsEqual);
