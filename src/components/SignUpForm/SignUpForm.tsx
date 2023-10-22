import signUpFormStyles from 'styles/modules/components/SignUpForm.module.css';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';
import { ISignUpForm } from 'types/SignUpForm';
import { FieldName, SignUpFormData, signUpFormSchema } from 'schemas/signUpFormSchema';


export const SignUpForm = ({ onSuccessHandler }: ISignUpForm) => {
  const { register, handleSubmit, formState: { errors }} = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
    reValidateMode: 'onChange',
  });

  const onSubmitHandler = ({ email }: SignUpFormData): void => {
    onSuccessHandler(email);
  };

  return (
  <form className={signUpFormStyles.signUpForm} onSubmit={handleSubmit(onSubmitHandler)}>
    <div className={signUpFormStyles.signUpForm__form}>
      <Input
        label='Email address'
        placeholder='email@company.com'
        type='text'
        inputAttributes={{...register(FieldName.email)}}
        errorMessage={errors.email?.message}
      />
    </div>
    <Button type='submit'>Subscribe to monthly newsletter</Button>
  </form>
  )
};

export default SignUpForm;