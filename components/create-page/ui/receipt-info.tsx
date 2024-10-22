import { BorderWrapper } from "./border-wrapper";
import ReceiptScanner from "./receipt-scanner";
import { Title } from "./title";

export default function ReceiptInfo() {
  return (
    <BorderWrapper bg="bg-secondary">
      <Title title="Receipt Information"></Title>
      <ReceiptScanner />
    </BorderWrapper>
  );
}
