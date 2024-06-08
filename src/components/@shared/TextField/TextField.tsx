import { FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import Input from '~components/@shared/Input/Input';

interface TextFieldProps {
  isRequired?: boolean;
  labelText: string;
  errorMsg?: string;
  inputName: string;
  placeholder?: string;
  /**
   * react-hook-form의 register
   */
  register?: UseFormRegister<FieldValues>;
}

/**
 * label, input, error message로 구성
 */
export default function TextField({
  isRequired,
  labelText,
  errorMsg,
  inputName,
  placeholder,
  register,
}: TextFieldProps) {
  return (
    <div>
      <Label htmlFor={inputName}>
        <span>{labelText}</span>
        {isRequired && <RequiredMark>*</RequiredMark>}
      </Label>
      <Input
        name={inputName}
        isError={!!errorMsg}
        register={register}
        placeholder={placeholder}
      />
      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
    </div>
  );
}

const Label = styled.label`
  display: block;
  margin-bottom: var(--space-3xs);
`;

const RequiredMark = styled.span`
  margin-left: var(--space-3xs);
  color: var(--color-negative);
`;

const ErrorText = styled.p`
  margin-top: var(--space-3xs);
  font-size: var(--font-xs);
  color: var(--color-negative);
`;
