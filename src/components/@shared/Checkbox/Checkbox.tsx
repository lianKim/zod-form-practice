import { ForwardedRef, forwardRef } from 'react';
import Icon from '~components/@shared/Icon/Icon';
import styled from 'styled-components';

interface CheckboxProps {
  name: string;
  isChecked: boolean;
}

export default forwardRef(function Checkbox(
  { name, isChecked }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <>
      <CheckboxInput
        id={name}
        name={name}
        type="checkbox"
        ref={ref}
        checked={isChecked}
      />
      {isChecked ? (
        <Icon name="CheckCircle" fill="var(--color-positive)" />
      ) : (
        <Icon name="CheckCircle" />
      )}
    </>
  );
});

const CheckboxInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;
