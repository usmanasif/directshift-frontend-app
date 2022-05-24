import * as React from "react";
import SignupForm from "./SignupForm";
import { Page } from "../../components/layouts/Common";

export default function Signup() {
  return <Page form={<SignupForm />} formTitle='Sign Up'/>;
}
