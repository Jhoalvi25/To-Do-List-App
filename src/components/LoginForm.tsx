import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { authService } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider,  signInWithRedirect } from "firebase/auth";

const LoginForm = ({ setMode }: any) => {

  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modeConverToSignUp = () => {
    setMode("signup");
  };

  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your e-mail.");
      return;
    }
    if (password === "") {
      alert("Please enter your password.");
      return;
    }

    await signInWithEmailAndPassword(authService, email, password)
      .then((data) => console.log(data))
      .catch((err) => {
        alert("Login failed.");
        setEmail("");
        setPassword("");
      });
  };

  const onGoogleLogin = () => {
    signInWithRedirect(authService, provider);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={onLoginSubmit}>
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
      <button
        type="submit"
        className="w-[100%] border-[1px] border-black mb-4 rounded-[4px] py-[5px] bg-[#3F4756] text-[white] transition duration-200 ease-in-out hover:opacity-80 active:opacity-80"
      >
        Log in
      </button>

      <button
        type="button"
        className="flex justify-center items-center border-black border-[1px] rounded-[4px] p-3 mb-2 drop-shadow-lg	bg-white transition duration-200 ease-in-out hover:opacity-80 active:opacity-80"
        onClick={onGoogleLogin}
      >
        <FcGoogle className="text-[50px]" />
      </button>

      <button
        type="button"
        onClick={modeConverToSignUp}
        className="text-[#3F4756] font-bold transition duration-200 ease-in-out hover:text-[blue]"
      >
       You do not have an account?
      </button>
    </form>
  );
};

export default LoginForm;
