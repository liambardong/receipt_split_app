import { auth } from "@/auth";
import { Button } from "../button";
import Link from "next/link";
import { Session } from "next-auth";

import AccountDropdown from "./account-dropdown";

export default async function AccountButton() {
  const session = await auth();
  console.log("Session: ", session);
  if (!session)
    return (
      <Button asChild>
        <Link href="/account/signin">Sign In</Link>
      </Button>
    );

  return <AccountDropdown user={session.user!} />;
}
