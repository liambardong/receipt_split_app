import { Item } from "@/app/context/NewReceiptContext";
import { Button } from "../button";

interface ItemProps {
  item: Item;
}

export default function ItemView({ item }: ItemProps) {
  const pricePerItem = item.price / item.quantity;

  return (
    <div className="border-4 p-4 rounded-lg grid grid-cols-2 gap-4">
      <h1 className="bg-slate-200 border-2 p-2 rounded-lg text-center">
        {item.name}
      </h1>
      <div className="text-center">
        <p className="pt-3">Total Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className=" grid grid-cols-subgrid gap-4 col-span-3">
        <div className="  col-start-2">
          <p className=" ">{`Quanity: ${item.quantity}`}</p>
          {pricePerItem != item.price && (
            <div className="  col-start-2">
              <p>Per item: ${pricePerItem.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-subgrid gap-4 col-span-3">
        <div className=" col-start-2 float items-center">
          <Button className="" variant={"secondary"}>
            Add Friend
          </Button>
        </div>
      </div>
    </div>
  );
}
