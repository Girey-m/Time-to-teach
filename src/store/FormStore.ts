import { makeAutoObservable } from "mobx";

interface UserSignUpData {
  firstName: FormDataEntryValue | null;
  lastName: FormDataEntryValue | null;
  schoolName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

interface UserLoginData {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

class FormStore {
  userSignUpData: UserSignUpData = {
    firstName: null,
    lastName: null,
    schoolName: null,
    email: null,
    password: null,
  };

  userLoginData: UserLoginData = {
    email: null,
    password: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async userSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      schoolName: formData.get("schoolName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (data) {
      this.userSignUpData = data;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.userSignUpData),
          }
        );

        const result = await response.json();
        console.log(result.response.json());
        console.log("Ответ от сервера:", result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Ошибка при отправке:", error);
        } else {
          console.log("Какаято другая ошибка:", error);
        }
      }
    }
  }

  async userLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (data) {
      this.userLoginData = data;

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.userLoginData),
          }
        );

        const result = await response.json();
        console.log(result.response.json());
        console.log("Ответ от сервера:", result);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Ошибка при отправке:", error);
        } else {
          console.log("Какаято другая ошибка:", error);
        }
      }
    }
  }
}

export const formStore = new FormStore();
