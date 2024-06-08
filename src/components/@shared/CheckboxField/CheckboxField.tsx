import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '~components/@shared/Checkbox/Checkbox';

interface CheckboxFieldProps {
  name: string;
  text?: string;
  allCheck?: boolean;
}

export default function CheckboxField({
  name,
  text,
  allCheck,
}: CheckboxFieldProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckbox = useCallback(() => {
    const checkboxEl = checkboxRef?.current;
    if (!checkboxEl) return;

    setIsChecked(checkboxEl.checked);
  }, [checkboxRef]);

  return (
    <Label htmlFor={name} onClick={handleCheckbox}>
      <Checkbox name={name} isChecked={isChecked} ref={checkboxRef} />
      <Text allCheck={allCheck}>{text}</Text>
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
  cursor: pointer;
`;

interface StyledTextProps {
  allCheck?: boolean;
}

const Text = styled.span<StyledTextProps>`
  font-size: ${(props) =>
    props.allCheck === true ? 'var(--font-md)' : 'var(--font-sm)'};
  font-weight: ${(props) =>
    props.allCheck === true ? 'var(--weight-medium)' : 'var(--weight-regular)'};
`;
