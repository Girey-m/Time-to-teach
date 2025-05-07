import { Box, TextField, Button } from "@mui/material";

export function LoginForm() {
  return (
    <Box
      key={"LoginForm"}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField label="Email" type="email" required />
      <TextField label="Пароль" type="password" required />
      <Button type="submit" variant="contained">
        Войти
      </Button>
    </Box>
  );
}
