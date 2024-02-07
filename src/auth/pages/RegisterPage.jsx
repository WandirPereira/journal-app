import React from "react";
import { AuthLayout } from "../layout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Criar conta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nome completo"
              type="text"
              placeholder="Nome completo"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correio"
              type="email"
              placeholder="correio@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasenha"
              type="password"
              placeholder="ContrasenhaS"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
