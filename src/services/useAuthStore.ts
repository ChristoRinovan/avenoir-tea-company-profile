import { create } from "zustand";
import Backendless from "@/services/backendless";
import { loginUser, logoutUser } from "@/services/authService";
import type { User } from "@/types/user";

type AuthStore = {
  user: User | null;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
};

const AUTH_USER_KEY = "authUser";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,

  login: async (email, password) => {
    const user = await loginUser(email, password);

    sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

    set({
      user,
      isLoading: false,
    });
  },

  checkAuth: async () => {
    const savedUser = sessionStorage.getItem(AUTH_USER_KEY);

    if (!savedUser) {
      set({
        user: null,
        isLoading: false,
      });

      return;
    }

    const user = JSON.parse(savedUser) as User;

    await Backendless.UserService.setCurrentUser(
      user as unknown as Backendless.User,
      false,
    );

    set({
      user,
      isLoading: false,
    });
  },

  logout: async () => {
    sessionStorage.removeItem(AUTH_USER_KEY);

    await logoutUser();

    set({
      user: null,
      isLoading: false,
    });
  },
}));