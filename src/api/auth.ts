import type { UserSignUpDataI } from "../interfaces/UserSignUpDataI";
import type { UserLoginDataI } from "../interfaces/UserLoginDataI";

export async function sendLoginData(data: UserLoginDataI) {
  if (data) {
    try {
      const response = await fetch("http://localhost:3333/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Ответ от сервера:", result);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Ошибка при авторизации:", error);
      } else {
        console.log("Какаято другая ошибка:", error);
      }
    }
  }
}

export async function sendUserSignUpData(data: UserSignUpDataI) {
  if (data) {
    console.log("Это то что мы отправляем", data);
    try {
      const response = await fetch("http://localhost:3333/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Ответ от сервера:", result);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Ошибка при регистрации:", error);
      } else {
        console.log("Какаято другая ошибка:", error);
      }
    }
  }
}
