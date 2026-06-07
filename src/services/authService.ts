import Backendless from "./backendless";
import type { User } from "@/types/user";

export async function loginUser(
  email: string,
  password: string,
): Promise<User> {
  const user = await Backendless.UserService.login(email, password, false);

  return user as unknown as User;
}

export async function getCurrentUser(): Promise<User | null> {
  const user = await Backendless.UserService.getCurrentUser();

  return user as unknown as User | null;
}

export async function logoutUser(): Promise<void> {
  await Backendless.UserService.logout();
}
