import { makeAutoObservable } from "mobx";

import { sendLoginData, sendUserSignUpData } from "../api/auth";

class UserStore {
  signUpFirstName: string = "";
  signUpsecondName: string = "";
  signUpautoSchoolName: string = "";
  signUpEmail: string = "";
  signUpPassword: string = "";

  loginPassword: string = "";
  loginEmail: string = "";

  constructor() {
    this.loginEmail = localStorage.getItem("login-email") ?? "";
    this.loginPassword = localStorage.getItem("login-password") ?? "";

    this.signUpFirstName = localStorage.getItem("sign-up-first-name") ?? "";
    this.signUpsecondName = localStorage.getItem("sign-up-last-name") ?? "";
    this.signUpautoSchoolName =
      localStorage.getItem("sign-up-school-name") ?? "";
    this.signUpEmail = localStorage.getItem("sign-up-email") ?? "";
    this.signUpPassword = localStorage.getItem("sign-up-password") ?? "";

    makeAutoObservable(this);
  }

  async sendUserSignUp() {
    const data = {
      firstName: this.signUpFirstName,
      secondName: this.signUpsecondName,
      autoSchoolName: this.signUpautoSchoolName,
      email: this.signUpEmail,
      password: this.signUpPassword,
    };

    sendUserSignUpData(data);
  }

  async sendUserLogin() {
    const data = {
      email: this.loginEmail,
      password: this.loginPassword,
    };
    sendLoginData(data);
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

  setSignUpsecondName(secondName: string) {
    this.signUpsecondName = secondName;
    localStorage.setItem("sign-up-last-name", secondName);
  }

  setSignUpautoSchoolName(autoSchoolName: string) {
    this.signUpautoSchoolName = autoSchoolName;
    localStorage.setItem("sign-up-school-name", autoSchoolName);
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
