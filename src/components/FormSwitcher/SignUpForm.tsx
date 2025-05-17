import { Box, TextField, Button } from "@mui/material";
import { userStore } from "../../store/UserStore";
import { observer } from "mobx-react-lite";

export const SignUpForm = observer(() => {
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
        value={userStore.signUpFirstName}
        onChange={(e) => userStore.setSignUpFirstName(e.target.value)}
        required
      />
      <TextField
        name="lastName"
        label="Фамилия"
        type="text"
        value={userStore.signUpLastName}
        onChange={(e) => userStore.setSignUpLastName(e.target.value)}
        required
      />
      <TextField
        name="schoolName"
        label="Название Автошколы"
        type="text"
        value={userStore.signUpSchoolName}
        onChange={(e) => userStore.setSignUpSchoolName(e.target.value)}
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
