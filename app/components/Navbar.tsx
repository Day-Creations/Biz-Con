import Image from "next/image";
import LOGO from "@/public/logo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-8 py-4 h-auto items-center z-10 max-w-[78rem] mx-auto bg-black md:bg-transparent">
        <Image
          src={LOGO}
          alt="logo"
          width={100}
          height={100}
          className="md:bg-black md:rounded-2xl w-[50px] h-[50px]"
        />
        <div className="space-x-4 text-md text-white md:block hidden">
          <Link href={"/"} className="5">
            {" "}
            Home
          </Link>
          <Link href={"/about"}> About</Link>
          <Link href={"/shop"}> Shop</Link>
          <Link href={"/signup"} className="bg-[#feaa00] py-2 px-5 rounded-md">
            Sign Up
          </Link>
        </div>

        <RxHamburgerMenu className="text-3xl text-white md:hidden block" />
      </nav>
    </>
  );
};

export default Navbar;
