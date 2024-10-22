import { BorderWrapper } from "./border-wrapper";
import { Title } from "./title";

export default function RestaurantInfo() {
  return (
    <BorderWrapper bg="bg-secondary">
      <Title title="Restaurant Information"></Title>
      <div>
        <h3 className="text-lg font-semibold">
          Restaurant Name
          {/* {receipt.restaurant.name} */}
        </h3>
        <p className="text-sm text-muted-foreground">
          Address
          {/* {receipt.restaurant.address} */}
        </p>
        <p className="text-sm text-muted-foreground">
          phone
          {/* {receipt.restaurant.phone} */}
        </p>
      </div>
    </BorderWrapper>
  );
}
