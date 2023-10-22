import { createContext, useState } from "react";

import { signUpFormIninialState } from "constants/SignUpFormContext"
import { ISignUpFormInitialState } from "types/SignUpFormContext";


export const SignUpFormContext = createContext<ISignUpFormInitialState>(signUpFormIninialState);

export const SignUpFormContextProvider = ({ children }: { children: JSX.Element }) => {
  const [email, setEmail] = useState(signUpFormIninialState.email);

  const onSuccessSubmit = (email: string): void => {
    setEmail(email);
    localStorage.setItem('email', email);
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