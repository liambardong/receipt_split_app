import { BorderWrapper } from "./border-wrapper";
import { Title } from "./title";

export default function CostInfo() {
  return (
    <BorderWrapper bg="bg-secondary">
      <Title title="Cost Information"></Title>
      <div className="border-t pt-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          {/* <span>${receipt.summary.subtotal.toFixed(2)}</span> */}
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          {/* <span>${receipt.summary.tax.toFixed(2)}</span> */}
        </div>
        <div className="flex justify-between">
          <span>Tip</span>
          {/* <span>${receipt.summary.tip.toFixed(2)}</span> */}
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          {/* <span>${receipt.summary.total.toFixed(2)}</span> */}
        </div>
      </div>
    </BorderWrapper>
  );
}
