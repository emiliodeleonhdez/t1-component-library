"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  href: string;
  textColor: string;
  icon: React.ReactNode;
  title: string;
  disabled?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  textColor,
  icon,
  title,
  disabled,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      data-testid="sidebar-item"
      href={disabled ? "#" : href}
      className={`relative px-1 py-4 lg:p-4 font-bold flex items-center gap-2 justify-center lg:justify-start 
        ${textColor}
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}
      `}
    >
      <div>{icon}</div>
      <div className="hidden lg:block">{title}</div>

      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3e9392] rounded"></span>
      )}
    </Link>
  );
};

export default SidebarItem;
