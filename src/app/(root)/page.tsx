import MessageForm from "@/components/shared/MessageForm";
import Messages from "@/components/shared/Messages";
import OnlineStatus from "@/components/shared/OnlineStatus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-[calc(100vh-4rem)] border-t border-t-border">
        <div className="col-span-12 lg:col-span-3 flex flex-col h-[calc(100vh-4rem-1px)]">
          <div className="p-4 relative border-b border-b-border border-r border-r-border">
            <Search className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-6" />
            <Input type="search" placeholder="Search" className="pr-6" />
          </div>
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tenetur qui fugit illo, quae accusantium eligendi
                        eveniet corporis voluptates aliquam molestias
                        consequatur ipsam ut blanditiis aut, nisi, nesciunt ex
                        est saepe.
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col h-[calc(100vh-4rem-1px)] relative">
          <div className="p-4 border-b border-b-border border-r border-r-border">
            <div className="h-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="avatar"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="">
                  <div className="">Duy Phan</div>
                  <OnlineStatus isOnline={true} />
                </div>
              </div>
            </div>
          </div>
          <Messages className="p-4 flex-1 bg-slate-100 border-r border-r-border border-l border-l-border" />
          <MessageForm className="p-4 border-t border-t-border" />
        </div>
        <div className="col-span-12 lg:col-span-3">details</div>
      </div>
    </>
  );
}
