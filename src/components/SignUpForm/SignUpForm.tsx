import signUpFormStyles from 'styles/modules/components/SignUpForm.module.css';

export const SignUpForm = () => (
  <form className={signUpFormStyles.signUpForm}>
    <div className={signUpFormStyles.inputForm}>
      <div className={signUpFormStyles.inputInfo}>
        <label className={signUpFormStyles.signUpForm__label}>Email address</label>
        <span className={signUpFormStyles.signUpForm__errorMessage}>Valid email required</span>
      </div>
      <input
        className={signUpFormStyles.signUpForm__input}
        type="text"
        placeholder='email@company.com'
      />
    </div>
    <button
      className={signUpFormStyles.signUpForm__button}
      type='submit'
    >
      Subscribe to monthly newsletter
    </button>
  </form>
);

export default SignUpForm;