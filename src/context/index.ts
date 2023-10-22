import { useContext } from "react";
import { SignUpFormContext } from "context/SignUpFormContext";

export const useSignUpFormContext = () => useContext(SignUpFormContext);