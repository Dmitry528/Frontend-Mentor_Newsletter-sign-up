import signUpImageStyles from 'styles/modules/components/SignUpImage.module.css';

import desktopIllustration from 'assets/images/illustration-sign-up-desktop.svg';

export const SignUpImage = () => (
  <div className={signUpImageStyles.signUpImage}>
    <picture>
      <img src={desktopIllustration} alt='desktop illustration' />
    </picture>
  </div>
);

export default SignUpImage;