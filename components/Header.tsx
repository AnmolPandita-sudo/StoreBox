import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo-bg-removed.png";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex items-center justify-between ">
      <Link
        href="/"
        className="flex items-center space-x-3 md:space-x-5 mt-2 ml-2"
      >
        <div>
          <Image
            src={logo}
            height={50}
            width={50}
            alt={""}
            className="rounded-2xl"
          />
        </div>
        <h1 className="md:text-2xl text-lg font-serif">StoreBox</h1>
      </Link>
      <div className=" px-5 flex space-x-2 items-center">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal">
            <Button
              variant="outline"
              className="dark:bg-[#3f3f86]  hover:dark:bg-[#4e4e4e] bg-[] text-black dark:text-white"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
