"use client";
import SidebarItem from "../atoms/Sidebar/SidebarItem";
import {
  FileAxis3D,
  FileInput,
  HomeIcon,
  IdCardLanyard,
  LayoutDashboard,
  Mouse,
} from "lucide-react";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col lg:p-4 lg:w-1/6 h-screen bg-brand-surface gap-4">
      <SidebarItem
        href="/"
        textColor="text-white"
        icon={<HomeIcon className="w-5 h-5" color="#3e9392" />}
        title="Home"
      />
      <SidebarItem
        href="/dashboard"
        disabled={true}
        textColor="text-white"
        icon={<LayoutDashboard className="w-5 h-5" color="#3e9392" />}
        title="Dashboard"
      />
      <SidebarItem
        href="/button-page"
        textColor="text-white"
        icon={<Mouse className="w-5 h-5" color="#3e9392" />}
        title="Button"
      />
      <SidebarItem
        href="/input-page"
        textColor="text-white"
        icon={<FileInput className="w-5 h-5" color="#3e9392" />}
        title="Input"
      />
      <SidebarItem
        href="/modal-page"
        textColor="text-white"
        icon={<FileAxis3D className="w-5 h-5" color="#3e9392" />}
        title="Modal"
      />
      <SidebarItem
        href="/card-page"
        textColor="text-white"
        icon={<IdCardLanyard className="w-5 h-5" color="#3e9392" />}
        title="Card"
      />
    </div>
  );
};

export default SideBar;
