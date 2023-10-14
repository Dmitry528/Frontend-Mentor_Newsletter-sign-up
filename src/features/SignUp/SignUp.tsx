import SignUpForm from 'components/SignUpForm';
import SignUpImage from 'components/SignUpImage';
import SignUpInfo from 'components/SignUpInfo';

import signUpStyles from 'styles/modules/features/SignUp.module.css';

const SignUp = () => (
  <div className={signUpStyles.signUp}>
    <div>
      <SignUpInfo />
      <SignUpForm />
    </div>
    <div>
      <SignUpImage />
    </div>
  </div>
);

export default SignUp;