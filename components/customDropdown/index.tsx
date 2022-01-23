import classnames from 'classnames';
import { memo, useCallback, useState, Children, FunctionComponent, ReactChild, ReactText } from 'react';
import IsEqual from 'react-fast-compare';
import { useClickOutside } from '@lib/hooks';
import { StyledDropdown } from './styles';

type IChild = Exclude<ReactChild, ReactText>;

type CustomDropdownProps = {
  children: JSX.Element;
  direction: 'up' | 'down' | 'left' | 'right';
  className?: string;
};

function CustomDropdown(props: CustomDropdownProps): JSX.Element {
  const { children, className, direction } = props;
  const [show, setShow] = useState(false);

  const onMenuItemClick = () => {
    setShow((prev) => !prev);
  };

  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const containerRef = useClickOutside<HTMLDivElement>(onClose);

  const renderChild = Children.map(children, (el) => {
    const child = el as IChild;
    if (child !== null) {
      const childType = child.type as FunctionComponent;
      const name = childType.displayName || childType.name;
      if (name === 'DropdownToggle') {
        return <child.type {...child.props} onClick={onMenuItemClick} />;
      }
      if (name === 'DropdownMenu') {
        return <child.type {...child.props} direction={direction} show={show} />;
      }
    }

    return null;
  });

  return (
    <StyledDropdown className={classnames(className, 'dropdown')} ref={containerRef}>
      {renderChild}
    </StyledDropdown>
  );
}

CustomDropdown.defaultProps = {
  direction: 'down',
} as CustomDropdownProps;

export default memo(CustomDropdown, IsEqual);
