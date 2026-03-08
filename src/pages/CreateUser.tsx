import LoginForm from "../components/auth/LoginForm";

const CreateUser = () => {

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-t from-black to-gray-800">
      <LoginForm />
    </div>
  );
};

export default CreateUser;
