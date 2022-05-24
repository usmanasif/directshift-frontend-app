import React from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { sendReferralEmail } from 'helpers/request';

function ReferFriendForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    sendReferralEmail(email)
    .then((status) => {
      if (status === true) {
        alert("Email Sent!");
      } else {
        alert("Could not send email!");
      }
    })
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        type="email"
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#4D4C7D" }}
      >
        Send referral link
      </Button>
    </Box>
  );
}

export default ReferFriendForm;
