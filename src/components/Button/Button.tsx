import buttonStyles from 'styles/modules/components/Button.module.css';

export interface IButtonProps {
  type: 'submit' | 'button';
  children: string;
}

export const Button = ({
  type,
  children,
}: IButtonProps) => (
  <button
    className={buttonStyles.button}
    type={type}
  >
    {children}
  </button>
);

export default Button;