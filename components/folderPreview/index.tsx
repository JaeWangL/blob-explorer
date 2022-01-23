import Link from 'next/link';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import FeatherIcon from '../featherIcon';
import { StyledMedia, StyledMediaBody } from './styles';

type FolderPreviewProps = {
  name: string;
  href: string;
  filesCount: number;
  sizeMb: number;
};

function FolderPreview(props: FolderPreviewProps): JSX.Element {
  const { filesCount, href, name, sizeMb } = props;

  return (
    <Link href={href} passHref>
      <StyledMedia>
        <FeatherIcon iconName="folder" />
        <StyledMediaBody>
          <h6>{name}</h6>
          <span>
            {filesCount} files, {sizeMb}mb
          </span>
        </StyledMediaBody>
      </StyledMedia>
    </Link>
  );
}

export default memo(FolderPreview, IsEqual);
