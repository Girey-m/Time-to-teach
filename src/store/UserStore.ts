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

class UserStore {
  userSignUpData: UserSignUpData = {
    firstName: "",
    lastName: "",
    schoolName: "",
    email: "",
    password: "",
  };

  signUpFirstName: string = "";
  signUpLastName: string = "";
  signUpSchoolName: string = "";
  signUpEmail: string = "";
  signUpPassword: string = "";

  userLoginData: UserLoginData = {
    email: "",
    password: "",
  };
  loginPassword: string = "";
  loginEmail: string = "";

  constructor() {
    this.loginEmail = localStorage.getItem("login-email") ?? "";
    this.loginPassword = localStorage.getItem("login-password") ?? "";

    this.signUpFirstName = localStorage.getItem("sign-up-first-name") ?? "";
    this.signUpLastName = localStorage.getItem("sign-up-last-name") ?? "";
    this.signUpSchoolName = localStorage.getItem("sign-up-school-name") ?? "";
    this.signUpEmail = localStorage.getItem("sign-up-email") ?? "";
    this.signUpPassword = localStorage.getItem("sign-up-password") ?? "";

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

  setLoginPassword(password: string) {
    this.loginPassword = password;
    localStorage.setItem("login-password", password);
  }

  setLoginEmail(email: string) {
    this.loginEmail = email;
    localStorage.setItem("login-email", email);
  }

  setSignUpFirstName(firstName: string) {
    this.signUpFirstName = firstName;
    localStorage.setItem("sign-up-first-name", firstName);
  }

  setSignUpLastName(lastName: string) {
    this.signUpLastName = lastName;
    localStorage.setItem("sign-up-last-name", lastName);
  }

  setSignUpSchoolName(schoolName: string) {
    this.signUpSchoolName = schoolName;
    localStorage.setItem("sign-up-school-name", schoolName);
  }

  setSignUpEmail(email: string) {
    this.signUpEmail = email;
    localStorage.setItem("sign-up-email", email);
  }

  setSignUpPassword(password: string) {
    this.signUpPassword = password;
    localStorage.setItem("sign-up-password", password);
  }
}

export const userStore = new UserStore();
