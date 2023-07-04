import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#B7C9EB] text-[#3F4756]">
      <div>
        <Logo large={true} />

        {mode === "login" ? (
          <LoginForm setMode={setMode} />
        ) : (
          <SignUpForm setMode={setMode} />
        )}

        <footer className="mt-5">
          <p className="text-center">
            MadeBy
            <a
              href=""
              className="font-bold text-[#1D324C] transition duration-200 ease-in-out hover:text-[blue] active:text-[blue]">
              Jhoalvi
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;