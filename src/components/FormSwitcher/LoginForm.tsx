import { Box, TextField, Button } from "@mui/material";
import { userStore } from "../../store/UserStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
interface loginFormState {
  email: string;
  password: string;
}

export const LoginForm = observer(() => {
  const [data, setData] = useState<loginFormState>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedData = userStore.getUserLocalStorage()?.login;
    if (savedData) {
      setData({
        email: savedData.email?.toString() || "",
        password: savedData.password?.toString() || "",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Box
      key={"LoginForm"}
      component="form"
      onSubmit={(e) => userStore.userLogin(e)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField
        name="email"
        label="Email"
        type="email"
        value={data.email}
        onChange={handleChange}
        required
      />
      <TextField
        name="password"
        label="Пароль"
        type="password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
});
