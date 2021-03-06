/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "../Drawer";

interface NavbarLinks {
  title: string;
  route: string | URL;
  active: boolean;
}

const Navbar = () => {
  const router = useRouter();
  const [showDrawer, setShow] = useState<boolean>(false);
  const navbarLinks: NavbarLinks[] = [
    {
      title: "Home",
      route: "/",
      active: true,
    },
    {
      title: "Personal Information",
      route: "/personal",
      active: false,
    },
    {
      title: "Projects",
      route: "/projects",
      active: true,
    },
    {
      title: "Contact",
      route: "/contact",
      active: false,
    },
    {
      title: "Music",
      route: "/music",
      active: true,
    },
  ];

  return (
    <>
      <div className="flex bg-neutral-900 flex-row justify-between !max-h-[10vh] w-full">
        <div
          className="navbar-brand flex flex-row items-center gap-4 p-8 cursor-pointer hover:scale-110 transition-all select-none"
          onClick={() => {
            router.push("/");
          }}
        >
          <img alt="" src="/wcnrny.png" className="h-12 w-12" />
          <span className="text-white font-sans text-xl">wcnrny</span>
        </div>
        <div
          className="hidden md:flex text-white gap-5 p-8 items-center"
          onClick={() => {
            setShow(!showDrawer);
          }}
        >
          <FaBars size={32} />
        </div>
        <div className="navbar-links flex flex-row items-center gap-5 p-8 text-lg text-[#d5d5d5] md:hidden">
          {navbarLinks.map((e) => {
            return (
              <a
                key={e.title}
                className={`p-3 hover:text-[#f7f7f7] rounded-xl transition-all hover:shadow-[0_0_10px_2px_#f7f7f7] select-none ${
                  e.active ? "cursor-pointer" : "cursor-not-allowed"
                }`}
                onClick={() => {
                  if (e.active) {
                    router.push(e.route);
                  } else return null;
                }}
              >
                {e.title}
              </a>
            );
          })}
        </div>
      </div>
      <Drawer opened={showDrawer} setOpened={setShow} />
    </>
  );
};

export default Navbar;
