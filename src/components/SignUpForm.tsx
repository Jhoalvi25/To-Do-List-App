import React, { useState } from "react";
import { authService } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUpForm = ({ setMode }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const modeConvertToLogin = () => {
    setMode("login");
  };
  const emailOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const password2OnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };
  const onSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your e-mail.");
      return;
    }
    if (password === "") {
      alert("Please enter a password.");
      return;
    }
    if (password !== password2) {
      alert("Passwords do not match.");
      return;
    }
    await createUserWithEmailAndPassword(authService, email, password)
      .then((data) => console.log(data))
      .catch((err) => {
        alert("Your registration failed.");
        setEmail("");
        setPassword("");
        setPassword2("");
      });
  };
  return (
    <form className="flex flex-col items-center" onSubmit={onSignUpSubmit}>
      <input
        type="email"
        placeholder="E-mail"
        className="w-[280px] mb-4 p-1"
        onChange={emailOnChange}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-[280px] mb-4 p-1"
        onChange={passwordOnChange}
        value={password}
      />
      <input
        type="password"
        placeholder="Verify password"
        className="w-[280px] mb-4 p-1"
        onChange={password2OnChange}
        value={password2}
      />
      <button
        type="submit"
        className="w-[100%] border-[1px] border-black mb-4 rounded-[4px] py-[5px] bg-[#3F4756] text-[white] transition duration-200 ease-in-out hover:opacity-80 active:opacity-80"
      >
        Create Account
      </button>

      <button
        type="button"
        onClick={modeConvertToLogin}
        className="text-[#3F4756] font-bold transition duration-200 ease-in-out hover:text-[blue]"
      >
        Do you already have an account?
      </button>
    </form>
  );
};

export default SignUpForm;
