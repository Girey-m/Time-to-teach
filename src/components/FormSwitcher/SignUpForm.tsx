import { Box, TextField, Button } from "@mui/material";
import { userStore } from "../../store/UserStore";
import { observer } from "mobx-react-lite";

export const SignUpForm = observer(() => {
  return (
    <Box
      key={"SignUpForm"}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        userStore.sendUserSignUp();
      }}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField
        name="firstName"
        label="Имя"
        type="text"
        value={userStore.signUpFirstName}
        onChange={(e) => userStore.setSignUpFirstName(e.target.value)}
        required
      />
      <TextField
        name="secondName"
        label="Фамилия"
        type="text"
        value={userStore.signUpsecondName}
        onChange={(e) => userStore.setSignUpsecondName(e.target.value)}
        required
      />
      <TextField
        name="autoSchoolName"
        label="Название Автошколы"
        type="text"
        value={userStore.signUpautoSchoolName}
        onChange={(e) => userStore.setSignUpautoSchoolName(e.target.value)}
        required
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={userStore.signUpEmail}
        onChange={(e) => userStore.setSignUpEmail(e.target.value)}
        required
      />
      <TextField
        name="password"
        label="Пароль"
        type="password"
        value={userStore.signUpPassword}
        onChange={(e) => userStore.setSignUpPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Зарегистрироваться
      </Button>
    </Box>
  );
});
