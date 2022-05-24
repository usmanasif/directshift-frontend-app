import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"
import { signin } from 'helpers/request';

const LoginForm = () => {
  let navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signin(data.get("email"), data.get("password"))
    .then((loggedIn) => {
      if (loggedIn) {
        navigate("/refer-friend")
      }
    })
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4D4C7D' }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
