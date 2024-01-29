"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { ThemeToggler } from "@/components/ThemeToggler";

function Login() {
  const { user } = useUser();
  return (
    <div>
      {user ? (
        <Link
          href="/dashboard"
          className="flex dark:bg-blue-500 dark:hover:bg-blue-800 transition bg-[#8ab6d6] hover:bg-[#6ab4ea] cursor-pointer p-5 w-fit rounded-2xl self-center items-center "
        >
          {/* Try it for Free💥💥💥!!! */}
          Take me To Dashboard💥💥💥!!!
        </Link>
      ) : (
        <div className=" px-5 flex space-x-2 items-center">
          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <div className="flex dark:bg-blue-500 dark:hover:bg-blue-800 transition bg-[#8ab6d6] hover:bg-[#6ab4ea] cursor-pointer p-5 w-fit rounded-2xl self-center items-center ">
              <SignInButton afterSignInUrl="/dashboard" mode="modal">
                Try it for Free💥💥💥!!!
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      )}
    </div>
  );
}

export default Login;
