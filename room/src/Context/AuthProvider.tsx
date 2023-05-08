import { createContext, useContext, useState, useEffect } from 'react';
import cookie from "cookie";

type User = {
  accessToken: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({children,}: {children: React.ReactNode;}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies.accessToken) {
      setUser({ accessToken: cookies.accessToken });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
