import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { authWithGoogle, register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
    navigate("/menu");
  };

  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        marginTop={"100px"}
      >
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{
            fontFamily: "monospace",
            letterSpacing: "2px",
            fontSize: "32px",
          }}
        >
          Регистрация
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginTop: "30px", width: "40%" }}
          label="почта"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginTop: "30px", width: "40%" }}
          label="пароль"
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ marginTop: "20px", width: "40%" }}
          v
        >
          Зарегистрироваться
        </Button>
        <Button
          onClick={() => authWithGoogle()}
          variant="contained"
          sx={{ marginTop: "20px", width: "40%" }}
        >
          Продолжить с Google
        </Button>
      </Grid>
    </>
  );
};

export default Register;
