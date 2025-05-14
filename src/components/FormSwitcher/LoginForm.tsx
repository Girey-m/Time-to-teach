import { Box, TextField, Button } from "@mui/material";
import { formStore } from "../../store/FormStore";
import { observer } from "mobx-react-lite";

export const LoginForm = observer(() => {
  return (
    <Box
      key={"LoginForm"}
      component="form"
      onSubmit={(e) => formStore.userLogin(e)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField name="email" label="Email" type="email" required />
      <TextField name="password" label="Пароль" type="password" required />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
});
