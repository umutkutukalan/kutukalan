import axios from "axios";
import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { API_URL } from "../services/config";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email?: string;
  role: string;
  profileImg?: string; // Base64 string or URL
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  job?: string;
  phone?: string;
  city?: string;
  aboutMe?: string;
  aboutMeItems?: string[];
  linkedin?: string;
  github?: string;
  instagram?: string;
  // add other fields your API returns
}

export interface UserContextType {
  user: User | null;
  setUser: (u: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/me`, {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.status !== 401) {
          console.error("UserContext: Kullanıcı alınamadı:", error);
        }
        setUser(null); // user yok = not authenticated
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
