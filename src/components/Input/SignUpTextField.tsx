import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { emailRegex } from "../../utils/regex";
import useConfirm from "../../hooks/useConfirm";
import useSignUp from "../../hooks/api/auth/useSignUp";

function SignUpTextField() {
  const {
    isEmailConfirm,
    setIsEmailConfirm,
    isPasswordConfirm,
    setIsPasswordConfirm,
  } = useConfirm();

  const { signUpController, feedbackMessage } = useSignUp();
  const [password, setPassword] = useState<HTMLInputElement>();
  const [passwordValidation, setPasswordValidation] =
    useState<HTMLInputElement>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email: FormDataEntryValue = data.get("email") ?? "";
    const password: FormDataEntryValue = data.get("password") ?? "";
    signUpController(email, password);
  };

  const emailOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!emailRegex.test(event.target.value)) setIsEmailConfirm(false);
    else setIsEmailConfirm(true);
  };

  const passwordOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target);
    if (event.target.value.length < 8) setIsPasswordConfirm(false);
    else if (event.target.value !== passwordValidation?.value)
      setIsPasswordConfirm(false);
    else setIsPasswordConfirm(true);
  };

  const passwordConfirmOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordValidation(event.target);
    if (event.target.value !== password?.value) setIsPasswordConfirm(false);
    else if (event.target.value.length < 8) setIsPasswordConfirm(false);
    else setIsPasswordConfirm(true);
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              onChange={emailOnChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={passwordOnChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password-confirm"
              label="비밀번호 확인  "
              type="password"
              id="password-confirm"
              autoComplete="password-confirm"
              onChange={passwordConfirmOnChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ color: "warning.main", fontWeight: "bold" }}
            >
              {feedbackMessage}
            </Typography>
          </Grid>
        </Grid>
        {isEmailConfirm &&
        isPasswordConfirm &&
        password?.value === passwordValidation?.value ? (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            완료
          </Button>
        ) : (
          <Button fullWidth disabled variant="contained" sx={{ mt: 3, mb: 2 }}>
            완료
          </Button>
        )}

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login">
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ color: "info" }}
              >
                이미 회원이신가요?
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignUpTextField;
