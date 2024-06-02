import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="">
      <div className="container">
        <div className="flex items-center justify-between gap-2 h-16">
          <div className="logo">
            <Link href="/" className="text-2xl font-bold">
              DUSK<span className="text-primary">.</span>
            </Link>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" showName />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
