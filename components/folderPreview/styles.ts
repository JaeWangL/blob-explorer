import styled from '@emotion/styled';
import { colors } from '@lib/styles';

export const StyledMedia = styled.a`
  position: relative;
  padding: 10px 12px;
  background-color: ${colors.gray900};
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: flex-start;

  & > svg {
    width: 42px;
    height: 42px;
    stroke-width: 1.5px;
    color: ${colors.primary};
    opacity: 0.7;
  }
`;

export const StyledMediaBody = styled.div`
  margin-top: 5px;
  margin-left: 10px;

  h6 {
    margin-bottom: 1px;
    color: ${colors.gray300};
  }
  span {
    font-size: 12px;
    color: ${colors.text3};
    display: block;
  }

  &:hover,
  &:focus {
    h6 {
      color: ${colors.white};
    }
  }
`;
