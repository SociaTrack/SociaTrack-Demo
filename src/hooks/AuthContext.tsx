import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import cookies from "js-cookie";
import { API } from "@/lib/urls";
import { axiosPublic } from "@/axiosConfig";
import axios from "axios";
import { DUMMY_CREDENTIALS, DUMMY_USER } from "@/types/User";

interface Auth {
  id?: number;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
  isOfflineMode?: boolean;
  user?: any;
}

interface AuthContextType {
  auth: Auth | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (
    email: string,
    name: string,
    password: string,
    confirmPassword: string
  ) => Promise<any>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const accessToken = cookies.get("accessToken");
      const refreshToken = cookies.get("refreshToken");
      const isOfflineMode = cookies.get("isOfflineMode") === "true";

      if (accessToken && refreshToken) {
        setAuth({
          accessToken,
          refreshToken,
          isOfflineMode: isOfflineMode || false,
          user: isOfflineMode ? DUMMY_USER : null,
          email: isOfflineMode ? DUMMY_USER.email : undefined,
        });
      } else if (isOfflineMode) {
        setAuth({
          isOfflineMode: true,
          accessToken: "dummy-token",
          user: DUMMY_USER,
          email: DUMMY_USER.email,
        });
      }

      setLoading(false);
    };
    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Check for dummy credentials first
      if (
        email === DUMMY_CREDENTIALS.email &&
        password === DUMMY_CREDENTIALS.password
      ) {
        const dummyAuth = {
          isOfflineMode: true,
          accessToken: "dummy-access-token",
          refreshToken: "dummy-refresh-token",
          user: DUMMY_USER,
          email: DUMMY_USER.email,
        };

        setAuth(dummyAuth);
        cookies.set("accessToken", "dummy-access-token", { expires: 1 });
        cookies.set("refreshToken", "dummy-refresh-token", { expires: 7 });
        cookies.set("isOfflineMode", "true", { expires: 7 });

        return {
          status: 200,
          data: {
            message: "Logged in with demo credentials (Offline Mode)",
            data: dummyAuth,
          },
        };
      }

      // Try normal API login
      const response = await axiosPublic.post(`${API}/account/auth/login`, {
        email,
        password,
      });
      if (response.status === 201 || response.status === 200) {
        const { accessToken, refreshToken } = response.data.data;
        setAuth({ accessToken, refreshToken, isOfflineMode: false });
        cookies.set("accessToken", accessToken, { expires: 1 });
        cookies.set("refreshToken", refreshToken, { expires: 7 });
        cookies.remove("isOfflineMode");
      }
      return response;
    } catch (error) {
      // If API fails and user entered dummy credentials, allow offline login
      if (
        email === DUMMY_CREDENTIALS.email &&
        password === DUMMY_CREDENTIALS.password
      ) {
        const dummyAuth = {
          isOfflineMode: true,
          accessToken: "dummy-access-token",
          refreshToken: "dummy-refresh-token",
          user: DUMMY_USER,
          email: DUMMY_USER.email,
        };

        setAuth(dummyAuth);
        cookies.set("accessToken", "dummy-access-token", { expires: 1 });
        cookies.set("refreshToken", "dummy-refresh-token", { expires: 7 });
        cookies.set("isOfflineMode", "true", { expires: 7 });

        return {
          status: 200,
          data: {
            message:
              "Logged in with demo credentials (Offline Mode - No Internet)",
            data: dummyAuth,
          },
        };
      }

      console.error("Login failed", error);
      throw error;
    }
  };

  const register = async (
    email: string,
    name: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const response = await axiosPublic.post(`${API}/account/auth/register`, {
        email,
        name,
        password,
        confirmPassword,
      });
      return response;
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const logout = () => {
    setAuth(null);
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    cookies.remove("isOfflineMode");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
