import styled from '@emotion/styled';
import { breakPoints, colors, defaultTheme } from '@lib/styles';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: ${defaultTheme.radii.rounded};
  background-color: ${colors.gray900};
  color: ${colors.gray500};
`;

export const StyledBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 15px;

  @media ${breakPoints.smUp}
    padding: 20px;
  }
`;

export const StyledFooter = styled.footer`
  border-top: 1px solid ${colors.border};
  background-color: transparent;
  padding: 0.75rem 1.25rem;
  &:last-of-type {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }
`;
