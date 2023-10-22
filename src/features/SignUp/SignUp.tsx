import SignUpForm from 'components/SignUpForm';
import SignUpImage from 'components/SignUpImage';
import SignUpInfo from 'components/SignUpInfo';
import { useSignUpFormContext } from 'context';

import signUpStyles from 'styles/modules/features/SignUp.module.css';

const SignUp = () => {

  const {
    onSuccessSubmit
  } = useSignUpFormContext();

  return (
  <div className={signUpStyles.signUp}>
    <div className={signUpStyles.signUpContent}>
      <SignUpInfo />
      <SignUpForm
        onSuccessHandler={onSuccessSubmit}
      />
    </div>
    <SignUpImage />
  </div>
  )
};

export default SignUp;