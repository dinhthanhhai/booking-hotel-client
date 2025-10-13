import React from "react";
import { Drawer } from "antd";
import { ListSidebarLink } from "@/data/data";
import { Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <Drawer open={isOpen} onClose={closeSidebar} placement="right" width={320}>
      <nav className="flex flex-col space-y-3">
        {ListSidebarLink.map((item, index) => (
          <Link
            key={index}
            to={`/${item.url}`}
            className="flex gap-3 items-center pb-3 border-b border-b-slate-300"
            onClick={closeSidebar}
          >
            <img src={item.icon} alt="icon" className="w-5 h-5" />
            <span className="text-base">{item.name}</span>
          </Link>
        ))}
      </nav>
    </Drawer>
  );
};

export default Sidebar;
