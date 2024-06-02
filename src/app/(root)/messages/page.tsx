import ChatMessages from "@/components/shared/ChatMessages";
import Conversations from "@/components/shared/Conversations";
import MessageForm from "@/components/shared/MessageForm";
import OnlineStatus from "@/components/shared/OnlineStatus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function MessagesPage() {
  return (
    <>
      <div className="grid grid-cols-12 h-[calc(100vh-4rem)] border-t border-t-border">
        <div className="col-span-12 lg:col-span-3 flex flex-col h-[calc(100vh-4rem-1px)]">
          <div className="p-4 relative border-b border-b-border border-r border-r-border">
            <Search className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-6" />
            <Input type="search" placeholder="Search" className="pr-6" />
          </div>
          <Conversations />
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
          <ChatMessages className="p-4 flex-1 bg-slate-100 border-r border-r-border border-l border-l-border" />
          <MessageForm className="p-4 border-t border-t-border" />
        </div>
        <div className="col-span-12 lg:col-span-3">details</div>
      </div>
    </>
  );
}
