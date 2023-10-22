import inputStyles from 'styles/modules/components/Input.module.css';

import { IInputProps } from 'types/Input';

export const Input = ({
  label,
  placeholder,
  type,
  inputAttributes,
  errorMessage = "",
}: IInputProps) => {
  return (
    <>
      <div className={inputStyles.inputInfo}>
        <label className={inputStyles.signUpForm__label}>{label}</label>
        <span className={inputStyles.signUpForm__errorMessage}>{errorMessage}</span>
      </div>
      <input
        className={`${inputStyles.signUpForm__input} ${errorMessage && inputStyles.signUpForm__inputError}`}
        type={type}
        placeholder={placeholder}
        {...inputAttributes}
      />
    </>
  )
};

export default Input;