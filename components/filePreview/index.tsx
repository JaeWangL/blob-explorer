import DayJS from 'dayjs';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import FeatherIcon from '../featherIcon';
import { StyledBody, StyledCard, StyledFooter, StyledMarker, StyledThumbnail } from './styles';

type FilePreviewProps = {
  color?: string;
  name: string;
  size: string;
  url: string;
  uploadedAt: Date;
  isFavorite?: boolean;
};

function FilePreview(props: FilePreviewProps): JSX.Element {
  const { color, isFavorite, name, size, uploadedAt, url } = props;

  return (
    <StyledCard>
      <>
        <StyledThumbnail color={color}>
          <img src={url} alt="blob" />
        </StyledThumbnail>
        <StyledBody>
          <>
            <h6>{name}</h6>
            <span>{size}</span>
          </>
        </StyledBody>
        <StyledFooter>
          <>
            <span>Uploaded date:</span> {DayJS(uploadedAt).format('YYYY-MM-DD')}
          </>
        </StyledFooter>
        {isFavorite && (
          <StyledMarker>
            <FeatherIcon iconName="star" />
          </StyledMarker>
        )}
      </>
    </StyledCard>
  );
}

FilePreview.defaultProps = {
  color: undefined,
  isFavorite: false,
} as FilePreviewProps;

export default memo(FilePreview, IsEqual);
