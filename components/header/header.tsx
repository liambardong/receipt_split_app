import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";
import AccountButton from "../account/account-button";
import { ModeToggle } from "../ui/mode-toggle";
import { SessionProvider } from "next-auth/react";

export default function Header() {
  return (
    <header className="flex min-w-screen p-4">
      <div className="flex-1 flex space-x-6">
        <Link href="/">
          <Image
            src="/DivviUpLogoFull.png"
            width={125} // Specify the width
            height={60} // Specify the height
            alt="DivviUp Logo"
            priority
          />
        </Link>
        <div className="flex space-x-4 items-center justify-center">
          <NavLink href="/receipts">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/receipts">Past Receipts</NavLink>
          <NavLink href="/create">Create Receipt</NavLink>
        </div>
      </div>
      <div className="ml-auto flex space-x-4 items-center justify-center">
        <SessionProvider>
          <AccountButton />
          <ModeToggle />
        </SessionProvider>
      </div>
    </header>
  );
}