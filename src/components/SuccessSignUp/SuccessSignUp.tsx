import successSignUpStyles from 'styles/modules/components/SuccessSignUp.module.css';

import successIllistration from 'assets/images/icon-success.svg';
import Button from 'components/Button';
import { ISuccessSignUp } from 'types/SuccessSignUp';

export const SuccessSignUp = ({ email }: ISuccessSignUp) => (
  <div className={successSignUpStyles.successSignUp}>
    <img src={successIllistration} className={successSignUpStyles.successSignUp__img } alt="success" />
    <div className={successSignUpStyles.successSignUpText}>
      <h1 className={successSignUpStyles.successSignUpText__title}>Thanks for subscribing!</h1>
      <p className={successSignUpStyles.successSignUpText__text}>
      A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription
      </p>
    </div>
    <Button type='button'>Dismiss message</Button>
  </div>
);

export default SuccessSignUp;