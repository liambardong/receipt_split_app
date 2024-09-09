import { Item } from "@/app/context/NewReceiptContext";
import defaultReceipt from "./default-receipt";
import ItemView from "./item-view";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function InfoTab() {
  console.log(defaultReceipt);
  return (
    <div className="h-full ">
      <ScrollArea className="h-72 rounded-md border">
        <ul>
          {defaultReceipt.items.map((item: Item) => (
            <li className="p-2">
              <ItemView item={item} />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
