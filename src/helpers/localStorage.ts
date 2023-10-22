import { FieldName } from "schemas/signUpFormSchema";

export const getEmailFromLocalStorage = (): string | null => (
  localStorage.getItem(FieldName.email)
)

export const setEmailToLocalStorage = (email: string): void => {
  localStorage.setItem(FieldName.email, email);
}