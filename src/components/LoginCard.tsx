import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/services/useAuthStore";
import { loginFormRules } from "@/types/validation";

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

      console.log("Login berhasil");
      navigate("/");
    } catch (error) {
      console.error("Login gagal:", error);
      alert("Email atau password salah.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginCard;

// function LoginCard() {
//   const [email, setCurrentEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const user = await loginUser(email, password);

//       console.log("Login berhasil:", user);
//       navigate("/");
//     } catch (error) {
//       console.error("Login gagal:", error);
//       alert("Email atau password salah.");
//     }
//   };
//   return (
//     import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "@/services/authService";

// function LoginCard() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const user = await loginUser(email, password);

//       console.log("Login berhasil:", user);

//       navigate("/");
//     } catch (error) {
//       console.error("Login gagal:", error);
//       alert("Email atau password salah.");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button type="submit">Login</button>
//     </form>

//     // <div>
//     //   <Card className="w-100 bg-second">
//     //     <CardHeader>
//     //       <CardTitle>Login to your account</CardTitle>
//     //       <CardDescription>
//     //         Enter your email below to login to your account
//     //       </CardDescription>
//     //       <CardAction>
//     //         <Button variant="link">Sign Up</Button>
//     //       </CardAction>
//     //     </CardHeader>
//     //     <CardContent>
//     //       <form>
//     //         <div className="flex flex-col gap-6">
//     //           <div className="grid gap-2">
//     //             <Label htmlFor="email">Email</Label>
//     //             <Input
//     //               id="email"
//     //               type="email"
//     //               placeholder="m@example.com"
//     //               required
//     //               className="bg-white"
//     //             />
//     //           </div>
//     //           <div className="grid gap-2">
//     //             <div className="flex items-center">
//     //               <Label htmlFor="password">Password</Label>
//     //             </div>
//     //             <Input
//     //               id="password"
//     //               type="password"
//     //               required
//     //               className="bg-white"
//     //             />
//     //           </div>
//     //         </div>
//     //       </form>
//     //     </CardContent>
//     //     <CardFooter className="flex-col gap-2">
//     //       <Button type="submit" className="w-full">
//     //         Login
//     //       </Button>
//     //     </CardFooter>
//     //   </Card>
//     // </div>
//   );
// }

// export default LoginCard;
