import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { Button } from "../button";

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
      <Link className={`${className}  text-base `} href={otherProps.href}>
        {children}
      </Link>
    </Button>
  );
}
