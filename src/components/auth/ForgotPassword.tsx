import { HiMail } from "react-icons/hi";
import { MdArrowBackIos } from "react-icons/md";

interface ForgotPasswordProps {
  setLogin: (value: boolean) => void;
  setForgotPassword: (value: boolean) => void;
}

const ForgotPassword = ({ setLogin, setForgotPassword }: ForgotPasswordProps) => {
  return (
    <form
      action=""
      className="flex flex-col gap-2 text-gray-800 w-100 bg-gradient-to-t from-gray-200 to-gray-400 p-10 rounded-4xl relative"
      style={{
        boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div className="absolute left-5 top-5">
        <MdArrowBackIos
          className="cursor-pointer"
          size={20}
          onClick={() => {
            setLogin(true);
            setForgotPassword(false);
          }}
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-2">
        <span className="tangerine-regular text-xl">kutukalan</span>
      </div>
      <div className="flex flex-col items-center gap-1 mb-5">
        <h2 className="text-2xl">sifre sıfırla</h2>
        <p className="text-sm opacity-50 text-center">
            giris sifrenizi unuttuysanız mail adresinizi girerek sifrenizi sıfırlayabilirsiniz
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 text-sm">
        <div className="w-full relative">
          <HiMail
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 pl-10 rounded-lg outline-none bg-[#eff3f6]"
          />
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

export default ForgotPassword;
