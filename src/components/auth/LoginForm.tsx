import { BiSolidLock, BiSolidUser } from "react-icons/bi";
import { useLogin } from "../../hooks/auth/useLogin";
import { useState } from "react";
import type { LoginUserData } from "../../services/auth/loginService";
import { logo2 } from "../../utils";

const LoginForm = () => {
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
      className="flex flex-col gap-2 text-gray-800 w-100 bg-gradient-to-tr from-gray-800 to-black p-10 rounded-2xl relative"
      style={{
        boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div className="w-full flex flex-col gap-3 text-sm">

        <img src={logo2} alt="" className="w-40" />

        <div className="w-full relative">
          <BiSolidUser
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 pl-8 text-sm rounded-lg outline-none bg-[#eff3f6]"
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
              className="w-full p-3 pl-8 text-sm rounded-lg outline-none bg-[#eff3f6]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors text-white cursor-pointer"
        >
          Giriş Yap
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
