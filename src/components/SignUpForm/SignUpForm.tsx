import signUpFormStyles from 'styles/modules/components/SignUpForm.module.css';

export const SignUpForm = () => (
  <form className={signUpFormStyles.signUpForm}>
    <div className={signUpFormStyles.inputForm}>
      <label className={signUpFormStyles.signUpForm__label}>Email address</label>
      <input
        className={signUpFormStyles.signUpForm__input}
        type="text"
        placeholder='email@company.com'
      />
    </div>
    <button className={signUpFormStyles.signUpForm__button}>Subscribe to monthly newsletter</button>
  </form>
);

export default SignUpForm;