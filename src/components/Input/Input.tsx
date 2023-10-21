import inputStyles from 'styles/modules/components/Input.module.css';

export interface IInputProps {
  label: string;
  type: 'text';
  placeholder: string;
  errorMessage?: string;
}

export const Input = ({
  label,
  placeholder,
  type,
  errorMessage = "",
}: IInputProps) => {
  return (
    <>
      <div className={inputStyles.inputInfo}>
        <label className={inputStyles.signUpForm__label}>{label}</label>
        <span className={inputStyles.signUpForm__errorMessage}>{errorMessage}</span>
      </div>
      <input
        className={inputStyles.signUpForm__input}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
};

export default Input;