"use client";
import api from "@/app/lib/axios";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await api.post("/auth/logout");
      if (res.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="p-4 flex justify-between">
      <h1 className="font-bold text-3xl md:text-5xl">T1 | Component Library</h1>
      <LogOut className="hover:cursor-pointer" onClick={handleLogout} />
    </div>
  );
};

export default Header;
