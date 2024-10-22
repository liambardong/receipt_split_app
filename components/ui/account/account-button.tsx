import { auth } from "@/auth";
import { Button } from "../button";
import Link from "next/link";

import AccountDropdown from "./account-dropdown";

// Ensure this function is asynchronous
export default async function AccountButton() {
  // Fetch the session asynchronously
  const session = await auth();
  console.log("Session: ", session);

  // Handle the case when there is no session
  if (!session) {
    return (
      <Button asChild>
        <Link href="/account/signin">Sign In</Link>
      </Button>
    );
  }

  // Return the account dropdown if the session is valid
  return <AccountDropdown user={session.user!} />;
}
