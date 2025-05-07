import { Box, TextField, Button } from "@mui/material";

export function SignUpForm() {
  return (
    <Box
      key={"SignUpForm"}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField label="Имя" type="text" required />
      <TextField label="Email" type="email" required />
      <TextField label="Пароль" type="password" required />
      <Button type="submit" variant="contained">
        Зарегистрироваться
      </Button>
    </Box>
  );
}
