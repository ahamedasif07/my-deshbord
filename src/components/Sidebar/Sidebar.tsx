"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  AppWindow,
  Layers,
  UserCircle,
  FileText,
  Rocket,
  Settings,
  Grid,
  List,
  Package,
  Clipboard,
  Table,
  ChevronRight,
  ChevronDown,
  Menu,
} from "lucide-react";
import { useAppContext } from "../ContexProvider/ContexProvider";
import { AiOutlineClose } from "react-icons/ai";

type MenuItem = {
  title: string;
  icon: JSX.Element;
  subItems?: { title: string; href: string }[];
  badge?: string;
};

const menu: { section: string; items: MenuItem[] }[] = [
  {
    section: "Menu",
    items: [
      {
        title: "Dashboards",
        icon: <LayoutGrid className="w-5 h-5" />,
        subItems: [
          { title: "Dashboard 1", href: "/" },
          { title: "Dashboard 2", href: "/" },
        ],
      },
      {
        title: "Pages",
        icon: <FileText className="w-5 h-5" />,
        subItems: [
          { title: "Posts", href: "/posts" },
          { title: "Users", href: "/user" },
        ],
      },
      {
        title: "Layouts",
        icon: <Layers className="w-5 h-5" />,

        subItems: [
          { title: "Vertical", href: "/" },
          { title: "Horizontal", href: "/" },
        ],
      },
    ],
  },
  {
    section: "Pages",
    items: [
      {
        title: "Authentication",
        icon: <UserCircle className="w-5 h-5" />,
        subItems: [
          { title: "Login", href: "/" },
          { title: "Register", href: "/" },
        ],
      },
      {
        title: "Pages",
        icon: <FileText className="w-5 h-5" />,
        subItems: [
          { title: "About", href: "/" },
          { title: "Contact", href: "/" },
        ],
      },
      {
        title: "Landing",
        icon: <Rocket className="w-5 h-5" />,
        subItems: [
          { title: "Landing 1", href: "/" },
          { title: "Landing 2", href: "/" },
        ],
      },
    ],
  },
  {
    section: "Components",
    items: [
      {
        title: "Base UI",
        icon: <Settings className="w-5 h-5" />,
        subItems: [
          { title: "Buttons", href: "/" },
          { title: "Cards", href: "/" },
        ],
      },
      {
        title: "Advance UI",
        icon: <Grid className="w-5 h-5" />,
        subItems: [
          { title: "Charts", href: "/" },
          { title: "Maps", href: "/" },
        ],
      },
      {
        title: "Widgets",
        icon: <List className="w-5 h-5" />,
        subItems: [
          { title: "Widget 1", href: "/" },
          { title: "Widget 2", href: "/" },
        ],
      },
      {
        title: "Forms",
        icon: <Clipboard className="w-5 h-5" />,
        subItems: [
          { title: "Form 1", href: "/" },
          { title: "Form 2", href: "/" },
        ],
      },
      {
        title: "Tables",
        icon: <Table className="w-5 h-5" />,
        subItems: [
          { title: "Table 1", href: "/" },
          { title: "Table 2", href: "/" },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const { isSideBarOpen, setIsSideBarOpen } = useAppContext();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="hidden md:block">
      <div
        className={`md:w-64 w-[200px]  min-h-screen z-500 ${
          isSideBarOpen ? "block" : "hidden"
        }`}
      >
        {/* Sidebar */}
        <aside
          className={`fixed w-64 top-0 left-0 h-screen bg-[#3f4d9c] text-white p-4 flex flex-col transition-transform duration-300 z-500 `}
        >
          {/* Logo */}
          <div className="text-center mx-auto flex justify-between items-center font-bold text-xl mb-6 uppercase">
            Zettabyte
          </div>

          {/* Scrollable menu */}
          <div className="flex-1 overflow-y-auto sidebar-scrollbar">
            {menu.map((section) => (
              <div key={section.section} className="mb-6">
                <p className="text-xs uppercase text-gray-300 mb-2">
                  {section.section}
                </p>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-[#2f3b7a] transition"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.title}</span>
                          {item.badge && (
                            <span className="ml-2 bg-red-500 text-xs px-2 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {openMenus[item.title] ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      {openMenus[item.title] && (
                        <ul className="ml-8 mt-1 space-y-1">
                          {item.subItems?.map((sub) => (
                            <li key={sub.title}>
                              <Link
                                href={sub.href}
                                className="block px-3 py-1 text-sm text-gray-200 rounded hover:bg-[#2f3b7a]"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};
export default Sidebar;
