import { createContext, useState, useEffect } from "react";

import { signUpFormIninialState } from "constants/SignUpFormContext"
import { ISignUpFormInitialState } from "types/SignUpFormContext";
import { getEmailFromLocalStorage, setEmailToLocalStorage } from "helpers/localStorage";


export const SignUpFormContext = createContext<ISignUpFormInitialState>(signUpFormIninialState);

export const SignUpFormContextProvider = ({ children }: { children: JSX.Element }) => {
  const [email, setEmail] = useState(signUpFormIninialState.email);

  useEffect(() => {
    const savedEmail: string | null = getEmailFromLocalStorage();

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const onSuccessSubmit = (email: string): void => {
    setEmail(email);
    setEmailToLocalStorage(email);
  };
 
  return (
    <SignUpFormContext.Provider value={{
      email,
      onSuccessSubmit,
    }}>
      {children}
    </SignUpFormContext.Provider>
  );
};