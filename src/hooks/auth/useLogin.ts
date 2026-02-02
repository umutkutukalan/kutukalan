import { useNavigate } from "react-router-dom";
import {
  loginService,
  type LoginUserData,
} from "../../services/auth/loginService";
import { useUser } from "../useUserContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const login = async (userData: LoginUserData) => {
    try {
      const response = await loginService(userData);
      setUser(response.user);
      navigate("/"); // Giriş başarılıysa ana sayfaya yönlendir;
      return response; // return the login response so callers can use it
    } catch (error) {
      console.error("Giriş hatası:", error);
      throw error;
    }
  };

  return { login };
};
