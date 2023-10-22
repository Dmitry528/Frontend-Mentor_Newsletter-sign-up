import signUpImageStyles from 'styles/modules/components/SignUpImage.module.css';

import desktopIllustration from 'assets/images/illustration-sign-up-desktop.svg';
import mobileIllustration from 'assets/images/illustration-sign-up-mobile.svg';

export const SignUpImage = () => (
  <div className={signUpImageStyles.signUpImage}>
    <picture className={signUpImageStyles.signUpImage__picture}>
      <source srcSet={mobileIllustration} media='(max-width: 992px)' />
      <img className={signUpImageStyles.signUpImage__img} src={desktopIllustration} alt='illustration' />
    </picture>
  </div>
);

export default SignUpImage;