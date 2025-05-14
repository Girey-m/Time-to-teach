import { Box, TextField, Button } from "@mui/material";
import { formStore } from "../../store/FormStore";
import { observer } from "mobx-react-lite";

export const SignUpForm = observer(() => {
  return (
    <Box
      key={"SignUpForm"}
      component="form"
      onSubmit={(e) => formStore.userSignUp(e)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField name="firstName" label="Имя" type="text" required />
      <TextField name="lastName" label="Фамилия" type="text" required />
      <TextField
        name="schoolName"
        label="Название Автошколы"
        type="text"
        required
      />
      <TextField name="email" label="Email" type="email" required />
      <TextField name="password" label="Пароль" type="password" required />
      <Button type="submit" variant="contained">
        Зарегистрироваться
      </Button>
    </Box>
  );
});
