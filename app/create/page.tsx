import { auth } from "@/auth";
import FriendsInfo from "@/components/ui/create-page/friends-info";
import ReceiptInfo from "@/components/ui/create-page/receipt-info";
import { redirect } from "next/navigation";
import { NewReceiptProvider } from "../context/NewReceiptContext";

export default async function CreatePage() {
  const session = await auth();

  if (!session) {
    redirect("account/signin");
  }
  return (
    <NewReceiptProvider>
      <div className="h-full flex items-center justify-center p-2 space-x-10">
        <ReceiptInfo />
        <FriendsInfo />
      </div>
    </NewReceiptProvider>
  );
}
