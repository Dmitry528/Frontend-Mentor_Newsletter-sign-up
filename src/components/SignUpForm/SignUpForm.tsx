import signUpFormStyles from 'styles/modules/components/SignUpForm.module.css';

import Button from 'components/Button';
import Input from 'components/Input';


export const SignUpForm = () => (
  <form className={signUpFormStyles.signUpForm}>
    <div className={signUpFormStyles.signUpForm__form}>
      <Input
        label='Email address'
        placeholder='email@company.com'
        type='text'
        errorMessage=''
      />
    </div>
    <Button type='submit'>Subscribe to monthly newsletter</Button>
  </form>
);

export default SignUpForm;