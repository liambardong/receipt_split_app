import { BorderWrapper } from "./ui/border-wrapper";
import FriendsList from "./ui/friends-list";

export default function FriendsComponent() {
  return (
    <BorderWrapper bg="bg-primary">
      <div className="p-2 h-full">
        <FriendsList />
      </div>
    </BorderWrapper>
  );
}
