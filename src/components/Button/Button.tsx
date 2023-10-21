import buttonStyles from 'styles/modules/components/Button.module.css';
import { IButtonProps } from 'types/Button';

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