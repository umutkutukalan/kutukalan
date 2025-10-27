import { BiSolidLock } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import type { UserData } from "../../services/userServices";

interface RegisterFormProps {
  setLogin: (value: boolean) => void;
  setRegister: (value: boolean) => void;
}

const RegisterForm = ({ setLogin, setRegister }: RegisterFormProps) => {
  const { createUser } = useUsers();

  const [firsName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [profileImg] = useState("");

  const userData: UserData = {
    firstName: firsName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    profileImg: profileImg,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      firsName &&
      lastName &&
      username &&
      email &&
      password &&
      password === passwordRepeat
    ) {
      createUser(userData);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 text-gray-800 w-100 bg-gradient-to-t from-gray-200 to-gray-400 p-10 rounded-4xl relative"
      style={{
        boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-2">
        <span className="tangerine-regular text-xl">kutukalan</span>
      </div>
      <div className="flex flex-col items-center gap-1 mb-5">
        <h2 className="text-2xl">yetkili kullanıcı talebi</h2>
        <p className="text-sm opacity-50 text-center">
          kullanıcı bilgilerini girin ve onaylanması için bekleyin
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 text-sm">
        <div className="w-full grid grid-cols-2 gap-1 text-white rounded-md overflow-hidden text-md">
          <div
            className="flex items-center justify-center p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer transition-all"
            onClick={() => {
              setLogin(true);
              setRegister(false);
            }}
          >
            Giris Yap
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer transition-all">
            Kullanıcı Olustur
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full flex-1 relative">
            <input
              type="text"
              placeholder="İsim"
              className="w-full p-2 rounded-lg outline-none bg-[#eff3f6]"
              onChange={(e) => setFirsName(e.target.value)}
            />
          </div>
          <div className="w-full flex-1 relative">
            <input
              type="text"
              placeholder="Soyisim"
              className="w-full p-2 rounded-lg outline-none bg-[#eff3f6]"
              onChange={(e) => setLastName(e.target.value)}
            />
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
        <div className="w-full relative">
          <HiMail
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 pl-10 rounded-lg outline-none bg-[#eff3f6]"
            onChange={(e) => setEmail(e.target.value)}
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
          <div className="w-full relative">
            <BiSolidLock
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="password"
              placeholder="Password Repeat"
              className="w-full p-3 pl-10 rounded-lg outline-none bg-[#eff3f6]"
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#181922]  p-2 rounded-lg hover:bg-blue-700 transition-colors text-white"
        >
          Kayıt Oluştur
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
