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
        console.log("UserContext: Fetching user from cookie...");

        // Cookie-based authentication
        const response = await axios.get(`${API_URL}/users/me`, {
          withCredentials: true, // HttpOnly cookie gönder
        });

        console.log("UserContext: User data from cookie:", response.data);
        setUser(response.data); // ✅ User var = authenticated
      } catch (error) {
        console.error("UserContext: Kullanıcı alınamadı:", error);
        console.log("UserContext: Cookie authentication failed");
        setUser(null); // ❌ User yok = not authenticated
      } finally {
        console.log("UserContext: Loading finished");
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
