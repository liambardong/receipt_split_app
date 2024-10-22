import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ReceiptComponent from "@/components/create-page/receipt-component";
import FriendsComponent from "@/components/create-page/friends-component";
import { Button } from "@/components/ui/button";

export default async function CreatePage() {
  const session = await auth();

  if (!session) {
    redirect("account/signin");
  }
  return (
    <div className="h-full w-full flex items-center justify-center p-2 space-x-10 grid grid-cols-3 gap-2">
      <div className="h-full col-span-2">
        <ReceiptComponent />
      </div>
      <div className="h-full flex flex-col rounded-lg">
        <div className="flex-grow">
          <FriendsComponent />
        </div>
        <div className="flex justify-center mb-4 mt-6">
          <Button className="m-2" size={"lg"} variant={"destructive"}>
            Reset
          </Button>
          <Button className="m-2" size={"lg"} variant={"default"}>
            Submit Receipt
          </Button>
        </div>
      </div>
    </div>
  );
}
