import React, { useMemo, useState } from "react";
import { AuthLayout } from "../layout";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  // email: "wpf@gmail.com",
  // password: "123456",
  // displayName: "Wandir Pereira",
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email inválido!"],
  password: [
    (value) => value.length >= 6,
    "Password deve ter mais de 6 caracteres!",
  ],
  displayName: [(value) => value.length >= 1, "Nome é obrigatório!"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === "checking");

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    onResetForm,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  // console.log(displayNameValid);
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    // console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Criar conta">
      {/* <h1>FormValid: {isFormValid ? "Válido" : "Incorreto"}</h1> */}
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nome completo"
              type="text"
              placeholder="Nome completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={displayNameValid && formSubmitted}
              // error={!!displayNameValid} para transformar null em binário false - não precisou
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correio"
              type="email"
              placeholder="correio@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasenha"
              type="password"
              placeholder="ContrasenhaS"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Criar conta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Já possui uma conta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingressar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
