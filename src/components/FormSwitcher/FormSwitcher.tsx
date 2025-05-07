import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

export function FormSwitcher() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        aria-label="Вкладки входа и регистрации"
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          label="Вход"
          sx={{
            "&.Mui-selected": {
              outline: "none",
            },
            "&.Mui-focusVisible": {
              outline: "none",
            },
          }}
        />
        <Tab label="Регистрация" />
      </Tabs>
      <Box sx={{ marginTop: 2 }}>
        {value === 0 && <LoginForm />}
        {value === 1 && <SignUpForm />}
      </Box>
    </Box>
  );
}
