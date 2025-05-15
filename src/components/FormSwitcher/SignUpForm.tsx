import { Box, TextField, Button } from "@mui/material";
import { userStore } from "../../store/UserStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

interface SignUpFormState {
  firstName: string;
  lastName: string;
  schoolName: string;
  email: string;
  password: string;
}

export const SignUpForm = observer(() => {
  const [data, setData] = useState<SignUpFormState>({
    firstName: "",
    lastName: "",
    schoolName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedData = userStore.getUserLocalStorage()?.signUp;
    if (savedData) {
      setData({
        firstName: savedData.firstName?.toString() || "",
        lastName: savedData.lastName?.toString() || "",
        schoolName: savedData.schoolName?.toString() || "",
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
      key={"SignUpForm"}
      component="form"
      onSubmit={(e) => userStore.userSignUp(e)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField
        name="firstName"
        label="Имя"
        type="text"
        value={data.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Фамилия"
        type="text"
        value={data.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        name="schoolName"
        label="Название Автошколы"
        type="text"
        value={data.schoolName}
        onChange={handleChange}
        required
      />
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
        Зарегистрироваться
      </Button>
    </Box>
  );
});
