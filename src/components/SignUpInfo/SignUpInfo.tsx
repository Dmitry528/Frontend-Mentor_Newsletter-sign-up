import signUpInfoStyles from 'styles/modules/components/SignUpInfo.module.css';

import successIcon from 'assets/images/icon-success.svg';

export const SignUpInfo = () => (
  <div className={signUpInfoStyles.signUpInfo}>
    <h1 className={signUpInfoStyles.signUpInfo__title}>Stay updated!</h1>
    <p className={signUpInfoStyles.signUpInfo__text}>
      Join 60,000+ product managers receiving monthly updates on:
    </p>
    <ul className={signUpInfoStyles.signUpInfo__list}>
      <li className={signUpInfoStyles.signUpInfo__item}>
        <img className={signUpInfoStyles.signUpInfo__icon} src={successIcon} alt='success icon' />
        <p>Product discovery and building what matters</p>
      </li>
      <li className={signUpInfoStyles.signUpInfo__item}>
        <img className={signUpInfoStyles.signUpInfo__icon} src={successIcon} alt='success icon' />
        <p>Measuring to ensure updates are a success</p>
      </li>
      <li className={signUpInfoStyles.signUpInfo__item}>
        <img className={signUpInfoStyles.signUpInfo__icon} src={successIcon} alt='success icon' />
        <p>And much more!</p>
      </li>
    </ul>
  </div>
)

export default SignUpInfo;