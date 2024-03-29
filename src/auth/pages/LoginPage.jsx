import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
// import { checkingCredentials } from "../../store/auth/authSlice.js";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  // const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });
  // console.log("checkingCredentials", checkingCredentials);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(email, password);
    // dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    // console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correio"
              type="email"
              placeholder="correio@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasenha"
              type="password"
              placeholder="ContrasenhaS"
              fullWidth
              name="password"
              onChange={onInputChange}
            />
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Criar uma conta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
