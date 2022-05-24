import * as React from "react";
import { Page } from "../layouts/Common";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ReferFriendForm from "./ReferFriendForm";

export default function ReferFriend() {
  return (
    <Page
      form={<ReferFriendForm />}
      formTitle="Refer Your Friend"
      formIcon={<AccessibilityNewIcon />}
    />
  );
}
