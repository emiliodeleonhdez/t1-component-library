import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1 h-screen overflow-auto">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
