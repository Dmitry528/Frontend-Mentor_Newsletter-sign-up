import * as yup from 'yup';

export enum FieldName {
  email = 'email',
}

export enum EmailFieldErrors {
  Required = 'Email is required',
  Invalid = 'Valid email required'
}

export type SignUpFormData = yup.InferType<typeof signUpFormSchema>;

export const signUpFormSchema = yup.object().shape({
  [FieldName.email]: yup.string().required(EmailFieldErrors.Required).email(EmailFieldErrors.Invalid)
})