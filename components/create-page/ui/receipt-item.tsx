import { Item } from "@/app/models/receipt";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";

interface ReceiptItemProps {
  item: Item;
}

export default function ReceiptItem({ item }: ReceiptItemProps) {
  return (
    <div className="w-full border-default border-2 rounded-2xl p-2">
      <h1>{item.name}</h1>
      <p>${item.price.toFixed(2)}</p>
      {item.quantity > 1 ? (
        <p>${(item.price / item.quantity).toFixed(2)} each</p>
      ) : (
        <></>
      )}
      <p>{item.descriptors.length > 0 && `(${item.descriptors.join(", ")})`}</p>
      <Button variant="outline" size="icon">
        <PersonIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
