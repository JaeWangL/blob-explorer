// @ts-ignore
import FeatherIconComponent from 'feather-icons-react';
import { memo } from 'react';
import IsEqual from 'react-fast-compare';

type FeatherIconProps = {
  iconName: string;
  size: string | number;
  className?: string;
  fillColor?: string;
};

function FeatherIcon(props: FeatherIconProps): JSX.Element {
  const { className, fillColor, iconName, size } = props;
  return <FeatherIconComponent className={className} icon={iconName} size={size} fill={fillColor} />;
}

FeatherIcon.defaultProps = {
  className: '',
  fillColor: 'none',
} as FeatherIconProps;

export default memo(FeatherIcon, IsEqual);
