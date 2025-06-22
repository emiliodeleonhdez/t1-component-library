import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import SideBar from "../components/organisms/SideBar";

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
