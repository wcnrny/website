/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useRouter } from "next/router";
import React from "react";

interface NavbarLinks {
  title: string;
  route: string;
  active: boolean;
}

const Drawer = ({ opened, setOpened }: { opened: boolean; setOpened: any }) => {
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
  const router = useRouter();
  return (
    <div
      className={`top-0 right-0 fixed w-full transition-all h-full bg-neutral-900 text-center flex flex-col justify-between text-white gap-5 text-2xl p-10 z-22  ${
        opened ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="bg-transparent self-end"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        X
      </button>
      <div className="flex flex-col gap-5 transition-all text-neutral-500">
        <span className="text-white">Buttons will be activated soon!</span>
        {navbarLinks.map((e) => (
          <span
            className={`transition-all ${
              e.active
                ? "cursor-pointer text-white"
                : "cursor-not-allowed text-neutral-500"
            }`}
            onClick={() => {
              if (e.active) {
                router.push(e.route);
              } else return null;
            }}
          >
            {e.title}
          </span>
        ))}
      </div>
      <div className="max-h-64 flex items-center justify-center gap-1">
        <img src={"/wcnrny.png"} alt="" className="h-24" />
        <span className="text-2xl font-sans">wcnrny</span>
      </div>
    </div>
  );
};

export default Drawer;
