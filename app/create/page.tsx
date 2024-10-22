import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { NewReceiptProvider } from "../context/NewReceiptContext";
import ReceiptComponent from "@/components/ui/create-page/receipt-component";
import FriendsComponent from "@/components/ui/create-page/friends-component";

export default async function CreatePage() {
  const session = await auth();

  if (!session) {
    redirect("account/signin");
  }
  return (
    <NewReceiptProvider>
      <div className="h-full w-full p-9 flex items-center justify-center p-2 space-x-10 grid grid-cols-3 gap-4">
        <div className="h-full col-span-2">
          <ReceiptComponent />
        </div>
        <div className="h-full">
          <FriendsComponent />
        </div>
      </div>
    </NewReceiptProvider>
  );
}
