import { FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

interface InputProps {
  name: string;
  placeholder?: string;
  isError?: boolean;
  register?: UseFormRegister<FieldValues>;
}

export default function Input({
  name,
  placeholder,
  isError,
  register,
}: InputProps) {
  return (
    <TextInput
      name={name}
      placeholder={placeholder}
      {...(register && register(name))}
      isError={isError}
    />
  );
}

interface StyledTextInputProps {
  isError?: boolean;
}

const TextInput = styled.input<StyledTextInputProps>`
  width: 400px;
  height: 42px;
  padding-left: var(--space-sm);
  border: 1px solid;
  border-color: ${(props) =>
    props.isError ? 'var(--color-red)' : 'var(--color-gray-300)'};
  border-radius: var(--radius-xs);

  &:focus {
    outline: none;
    border-color: var(--color-gray-700);
  }
`;
