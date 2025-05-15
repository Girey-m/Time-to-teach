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

interface UserLocalStorage {
  signUp: UserSignUpData | null;
  login: UserLoginData | null;
}

class UserStore {
  userSignUpData: UserSignUpData = {
    firstName: "",
    lastName: "",
    schoolName: "",
    email: "",
    password: "",
  };

  userLoginData: UserLoginData = {
    email: "",
    password: "",
  };

  userLocalStorage: UserLocalStorage = {
    signUp: null,
    login: null,
  };

  constructor() {
    const localData = localStorage.getItem("userLocalStorage")
      ? JSON.parse(localStorage.getItem("userLocalStorage")!)
      : false;
    if (!localData) {
      this.userLocalStorage = {
        signUp: this.userSignUpData,
        login: this.userLoginData,
      };
      localStorage.setItem(
        "userLocalStorage",
        JSON.stringify(this.userLocalStorage)
      );
    } else {
      this.userLocalStorage = localData;
    }
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
      this.userLocalStorage.signUp = this.userSignUpData;
      localStorage.setItem(
        "userLocalStorage",
        JSON.stringify(this.userLocalStorage)
      );
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
      this.userLocalStorage.login = this.userLoginData;
      localStorage.setItem(
        "userLocalStorage",
        JSON.stringify(this.userLocalStorage)
      );

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

  getUserLocalStorage(): UserLocalStorage | null {
    const storedData = localStorage.getItem("userLocalStorage");
    if (storedData) {
      return JSON.parse(storedData) as UserLocalStorage;
    }
    return null;
  }
}

export const userStore = new UserStore();
