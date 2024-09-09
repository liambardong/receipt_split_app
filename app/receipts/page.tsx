import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ReceiptsPage() {
  const session = await auth();

  if (!session) {
    redirect("account/signin");
  }

  return (
    <div>
      <h1>Receipts</h1>
    </div>
  );
}
