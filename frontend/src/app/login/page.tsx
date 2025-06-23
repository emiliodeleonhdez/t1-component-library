// import { Button } from "../components/atoms/Button/Button";
// import { Input } from "../components/atoms/Input/Input";

// export default function InputPage() {
//   return (
//     <section className="flex h-screen w-screen items-center justify-center p-2 md:p-6">
//       <section className="login-container flex flex-col md:flex-row w-screen justify-center items-center gap-4 md:gap-24 p-6">
//         <section className="art-container flex flex-col gap-2 text-center">
//           <h2 className="text-lg md:text-2xl font-bold">
//             T1 | Component Library
//           </h2>
//           <p className="text-xs md:text-base text-gray-400">
//             Developed with ☕ by Emilio De Leon
//           </p>
//         </section>
//         <section className="flex flex-col gap-4 border-1 border-gray-200 shadow-xl/30 p-4 md:p-8 rounded">
//           <Input
//             type="email"
//             label="Email"
//             helperText="Ingresa un correo electrónico"
//             placeHolder="your@example.com"
//           />
//           <Input
//             type="password"
//             label="Contraseña"
//             helperText="Ingresa tú contraseña"
//           />
//           <Button>
//             <span>Iniciar sesión</span>
//           </Button>
//         </section>
//       </section>
//     </section>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/atoms/Button/Button";
import { Input } from "../components/atoms/Input/Input";
import api from "../lib/axios";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/login", { email, password });
      router.push("/");
    } catch (err: unknown) {
      setError(err as string);
    }
  };

  return (
    <section className="flex h-screen w-screen items-center justify-center p-2 md:p-6">
      <section className="login-container flex flex-col md:flex-row w-screen justify-center items-center gap-4 md:gap-24 p-6">
        <section className="art-container flex flex-col gap-2 text-center">
          <h2 className="text-lg md:text-2xl font-bold">
            T1 | Component Library
          </h2>
          <p className="text-xs md:text-base text-gray-400">
            Developed with ☕ by Emilio De Leon
          </p>
        </section>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 border-1 border-gray-200 shadow-xl/30 p-4 md:p-8 rounded"
        >
          <Input
            type="email"
            label="Email"
            helperText="Ingresa un correo electrónico"
            placeHolder="your@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Contraseña"
            helperText="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit">
            <span>Iniciar sesión</span>
          </Button>
        </form>
      </section>
    </section>
  );
}
