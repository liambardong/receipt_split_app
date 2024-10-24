import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function NavLink({
  children,
  className,
  ...otherProps
}: NavLinkProps) {
  return (
    <Button asChild variant="link">
      <Link
        className={`${className}  text-xl font-semibold`}
        href={otherProps.href}
      >
        {children}
      </Link>
    </Button>
  );
}
