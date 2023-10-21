import signUpInfoStyles from 'styles/modules/components/SignUpInfo.module.css';

import successIcon from 'assets/images/icon-success.svg';

import { signUpItems } from 'constants/SignUpInfo';
import { SignUpItem } from 'types/SignUpInfo';

export const SignUpInfo = () => (
  <div className={signUpInfoStyles.signUpInfo}>
    <h1 className={signUpInfoStyles.signUpInfo__title}>Stay updated!</h1>
    <p className={signUpInfoStyles.signUpInfo__text}>
      Join 60,000+ product managers receiving monthly updates on:
    </p>
    <ul className={signUpInfoStyles.signUpInfo__list}>
      {signUpItems.map(({ text }: SignUpItem) => (
        <li className={signUpInfoStyles.signUpInfo__item}>
          <img className={signUpInfoStyles.signUpInfo__icon} src={successIcon} alt='success icon' />
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default SignUpInfo;