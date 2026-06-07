import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/services/useAuthStore";
import { loginFormRules } from "@/types/validation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function LoginCard() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginFormRules.safeParse({
      email,
      password,
    });

    if (!result.success) {
      alert(result.error.issues[0].message);
      return;
    }

    try {
      await login(email, password);

      // console.log("Login berhasil");
      navigate("/");
    } catch (error) {
      console.error("Login gagal:", error);
      alert("Email atau password salah.");
    }
  };

  return (
    <Card className="w-full max-w-sm bg-second">
      <form onSubmit={handleLogin}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2 mt-5">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginCard;
