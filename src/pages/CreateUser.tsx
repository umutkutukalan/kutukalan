import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import ForgotPassword from "../components/auth/ForgotPassword";

const CreateUser = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-t from-black to-gray-300">
      {login ? (
        <LoginForm
          setLogin={setLogin}
          setRegister={setRegister}
          setForgotPassword={setForgotPassword}
        />
      ) : register ? (
        <RegisterForm setLogin={setLogin} setRegister={setRegister} />
      ) : (
        <ForgotPassword
          setLogin={setLogin}
          setForgotPassword={setForgotPassword}
        />
      )}
    </div>
  );
};

export default CreateUser;
