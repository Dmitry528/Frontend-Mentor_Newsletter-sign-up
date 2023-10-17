import SignUpForm from 'components/SignUpForm';
import SignUpImage from 'components/SignUpImage';
import SignUpInfo from 'components/SignUpInfo';

import signUpStyles from 'styles/modules/features/SignUp.module.css';

const SignUp = () => (
  <div className={signUpStyles.signUp}>
    <div className={signUpStyles.signUpContent}>
      <SignUpInfo />
      <SignUpForm />
    </div>
    <SignUpImage />
  </div>
);

export default SignUp;