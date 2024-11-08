import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const currentPath = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActive = (route: string) => {
    return currentPath === route && currentHash === "";
  };

  const isPhotosActive = currentHash === "#photos";

  return (
    <>
      <nav className="flex flex-row p-3 justify-center items-center bg-bg-secondary">
        <img
          src="https://cdn.racc.pics/imgs/newlogo.png"
          alt="navbar-logo"
          className="w-14 h-auto rounded-full"
          draggable={false}
        />
        <ul className="flex flex-row gap-3 ml-6 text-3xl">
          <li
            className={`text-[#d8c2ba] transition-all duration-300 relative ${
              isActive("/")
                ? "active-link cursor-default"
                : "cursor-pointer hover:text-text-secondary"
            }`}
          >
            {!isActive("/") ? <Link href="/">home</Link> : "home"}
          </li>
          <li
            className={`text-[#d8c2ba] transition-all duration-300 relative ${
              isPhotosActive
                ? "active-link cursor-default"
                : "cursor-pointer hover:text-text-secondary"
            }`}
          >
            {!isPhotosActive ? <Link href="/#photos">photos</Link> : "photos"}
          </li>
          <li
            className={`hover:text-text-secondary text-[#d8c2ba] transition-all duration-300 relative`}
          >
            <a
              href="https://discord.gg/Ghxw5eEn2D"
              target="_blank"
              rel="noopener noreferrer"
            >
              support
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        li.active-link::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: white;
          position: absolute;
          left: 0;
        }

        li:hover.active-link::after {
          background-color: white;
        }
      `}</style>
    </>
  );
};

export default Navbar;
