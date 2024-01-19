import React, { useState } from "react";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();

  const { user, logIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogInSubmit = async () => {
    try {
      await logIn(email, password);
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
          Авторизация
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
          onClick={() => handleLogInSubmit()}
          variant="contained"
          sx={{ marginTop: "20px", width: "40%" }}
          v
        >
          Войти
        </Button>
        <div style={{ marginTop: "15px" }}>
          Нет аккаунта?
          <Link to={"/register"} style={{ marginLeft: "5px", color: "blue" }}>
            {" "}
            Нажмите для создания
          </Link>
        </div>
      </Grid>
    </>
  );
};

export default Login;
