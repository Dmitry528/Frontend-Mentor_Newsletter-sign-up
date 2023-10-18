import signUpImageStyles from 'styles/modules/components/SignUpImage.module.css';

import desktopIllustration from 'assets/images/illustration-sign-up-desktop.svg';
import mobileIllustration from 'assets/images/illustration-sign-up-mobile.svg';

export const SignUpImage = () => (
  <div className={signUpImageStyles.signUpImage}>
    <picture>
      <source srcSet={mobileIllustration} media='(max-width: 576px)' />
      <img src={desktopIllustration} alt='desktop illustration' />
    </picture>
  </div>
);

export default SignUpImage;