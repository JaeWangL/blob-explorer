import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { StyledBody, StyledCard, StyledFooter } from './styles';

type CardProps = {
  children: JSX.Element;
};
export const Card = memo((props: CardProps): JSX.Element => {
  const { children } = props;

  return <StyledCard>{children}</StyledCard>;
}, IsEqual);

type CardBodyProps = {
  children: JSX.Element;
};
export const CardBody = memo((props: CardBodyProps): JSX.Element => {
  const { children } = props;

  return <StyledBody>{children}</StyledBody>;
}, IsEqual);

type CardFooterProps = {
  children: JSX.Element;
};
export const CardFooter = memo((props: CardFooterProps): JSX.Element => {
  const { children } = props;

  return <StyledFooter>{children}</StyledFooter>;
}, IsEqual);
