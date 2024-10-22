import { BorderWrapper } from "./border-wrapper";
import FriendsList from "./friends-list";

export default function FriendsComponent() {
  return (
    <BorderWrapper bg="bg-primary">
      <div className="p-2 h-full">
        <FriendsList />
      </div>
    </BorderWrapper>
  );
}
