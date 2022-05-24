import * as React from "react";
import LoginForm from "./LoginForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Page } from "../../components/layouts/Common";

export default function Login() {
  return (
    <Page
      form={<LoginForm />}
      formTitle="Log In"
      formIcon={<LockOutlinedIcon />}
    />
  );
}
