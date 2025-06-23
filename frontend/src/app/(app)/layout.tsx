import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AppLayout from "../components/organisms/AppLayout";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("authToken")?.value;
  if (!token) {
    redirect("/login");
  }

  return <AppLayout>{children}</AppLayout>;
}
