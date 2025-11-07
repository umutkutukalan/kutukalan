import { BiSolidLock, BiSolidUser } from "react-icons/bi";
import { useLogin } from "../../hooks/auth/useLogin";
import { useState } from "react";
import type { LoginUserData } from "../../services/auth/loginService";

interface LoginFormProps {
  setLogin: (value: boolean) => void;
  setRegister: (value: boolean) => void;
  setForgotPassword: (value: boolean) => void;
}

const LoginForm = ({
  setLogin,
  setRegister,
  setForgotPassword,
}: LoginFormProps) => {
  const { login } = useLogin();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userData: LoginUserData = {
    username: username,
    password: password,
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        login(userData);
      }}
      className="flex flex-col gap-2 text-gray-800 w-100 bg-gradient-to-t from-gray-200 to-gray-400 p-10 rounded-4xl relative"
      style={{
        boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-2">
        <span className="tangerine-regular text-xl">kutukalan</span>
      </div>
      <div className="flex flex-col items-center gap-1 mb-5">
        <h2 className="text-2xl">kutukalan.com | panel</h2>
        <p className="text-sm opacity-50 text-center">
          siteye giriş yetkiniz var ise mail ve sifre ile giriş yapabilirsiniz
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 text-sm">
        <div className="w-full grid grid-cols-2 gap-1 text-white rounded-md overflow-hidden text-md">
          <div className="flex items-center justify-center p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer transition-all">
            Giris Yap
          </div>
          <div
            className="flex items-center justify-center p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer transition-all"
            onClick={() => {
              setLogin(false);
              setRegister(true);
            }}
          >
            Kullanıcı Olustur
          </div>
        </div>
        <div className="w-full relative">
          <BiSolidUser
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 pl-10 rounded-lg outline-none bg-[#eff3f6]"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <div className="w-full relative">
            <BiSolidLock
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 rounded-lg outline-none bg-[#eff3f6]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="text-sm opacity-50 cursor-pointer md:opacity-60"
            onClick={() => {
              setLogin(false);
              setForgotPassword(true);
            }}
          >
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-[#181922]  p-2 rounded-lg hover:bg-blue-700 transition-colors text-white"
        >
          Create User
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
