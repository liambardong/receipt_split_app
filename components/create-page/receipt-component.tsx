import { BorderWrapper } from "./ui/border-wrapper";
import CostInfo from "./ui/cost-info";
import ReceiptInfo from "./ui/receipt-info";
import RestaurantInfo from "./ui/restaurant-info";

export default async function ReceiptComponent() {
  return (
    <BorderWrapper bg="bg-primary">
      <div className="h-full grid grid-cols-2 gap-4 col-span-3">
        <div className="h-full grid grid-rows-[2fr_1fr]">
          <div className=" p-2">
            <RestaurantInfo />
          </div>
          <div className="p-2  ">
            <CostInfo />
          </div>
        </div>
        <div className="h-full p-2">
          <ReceiptInfo />
        </div>
      </div>
    </BorderWrapper>
  );
}
