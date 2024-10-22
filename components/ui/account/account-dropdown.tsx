import { User } from "next-auth";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";

import SignOutButton from "./signout-button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

interface AccountDropdownProps {
  user: User;
}

export default async function AccountDropdown({ user }: AccountDropdownProps) {
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Avatar>
            <AvatarImage src={user.image ? user.image : ""} />
            <AvatarFallback>
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className="pl-2">{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/account">Edit Account </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
