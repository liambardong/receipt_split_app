import { Item } from "@/app/models/receipt";

interface ReceiptItemProps {
  item: Item;
}

export default function ReceiptItem({ item }: ReceiptItemProps) {
  return (
    <div>
      <h1>{item.name}</h1>
      <span>${(item.price * item.quantity).toFixed(2)}</span>
      <span>
        {item.descriptors.length > 0 && `(${item.descriptors.join(", ")})`}
      </span>
    </div>
  );
}
