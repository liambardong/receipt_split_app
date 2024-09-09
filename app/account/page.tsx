import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();

  if (!session) {
    redirect("account/signin");
  }

  return (
    <div>
      <h1>Account Page</h1>
    </div>
  );
}
