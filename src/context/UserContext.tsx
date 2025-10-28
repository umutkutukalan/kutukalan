import { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface User {
  id: string | number;
  firstname: string;
  lastname: string;
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
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
