import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const MainGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: "url(https://source.unsplash.com/random)",
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "64px 32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Page = ({ form, formTitle, formIcon }) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <MainGrid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <MainBox>
            <Avatar sx={{ m: 1, bgcolor: "#363062" }}>
              {formIcon}
            </Avatar>
            <Typography component="h1" variant="h5">
              {formTitle}
            </Typography>
            {form}
          </MainBox>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
