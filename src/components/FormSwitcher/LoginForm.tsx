import { Box, TextField, Button } from "@mui/material";
import { userStore } from "../../store/UserStore";
import { observer } from "mobx-react-lite";

export const LoginForm = observer(() => {
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
        value={userStore.loginEmail}
        onChange={(e) => userStore.setLoginEmail(e.target.value)}
        required
      ></TextField>
      <TextField
        name="password"
        label="Пароль"
        type="password"
        value={userStore.loginPassword}
        onChange={(e) => userStore.setLoginPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
});
