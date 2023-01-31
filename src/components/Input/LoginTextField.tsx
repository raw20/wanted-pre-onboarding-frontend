import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/api/auth/useLogin";
import Typography from "@mui/material/Typography";

function LoginTextField() {
  const { loginController, feedbackMessage } = useLogin();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email: FormDataEntryValue = data.get("email") ?? "";
    const password: FormDataEntryValue = data.get("password") ?? "";
    loginController(email, password);
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        data-testid="email-input"
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
        data-testid="password-input"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Grid item xs={12}>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ color: "warning.main", fontWeight: "bold" }}
        >
          {feedbackMessage}
        </Typography>
      </Grid>
      <Button
        data-testid="signin-button"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        로그인
      </Button>
      <Grid container>
        <Grid item>
          <Link to="/signup" data-testid="signup-button">
            {"Don't have an account? Sign Up"}{" "}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginTextField;
