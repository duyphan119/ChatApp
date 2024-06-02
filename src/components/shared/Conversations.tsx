import MessageForm from "@/components/shared/MessageForm";
import ChatMessages from "@/components/shared/ChatMessages";
import OnlineStatus from "@/components/shared/OnlineStatus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Conversations() {
  return (
    <ScrollArea className="flex-1">
      <ul className="flex flex-col">
        {new Array(22).fill("").map((_, index) => (
          <li
            key={Math.random()}
            className={cn(
              "p-4 hover:bg-slate-50",
              index === 3 && "bg-slate-100"
            )}
          >
            <Link href="/" className="flex items-center gap-4">
              <div className="relative">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <OnlineStatus isOnline={true} isAbsolute={true} />
              </div>
              <div className="flex-1">
                <div className="">Duy Phan</div>
                <div className="line-clamp-2 text-muted-foreground text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur qui fugit illo, quae accusantium eligendi eveniet
                  corporis voluptates aliquam molestias consequatur ipsam ut
                  blanditiis aut, nisi, nesciunt ex est saepe.
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
