import { UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function UserSearchResult({ items = [] }: { items?: any[] }) {
  return (
    <div className="absolute top-full inset-x-0 z-10 bg-white shadow-md rounded-md max-h-60 custom-scrollbar-vertical overflow-y-auto">
      {items.length === 0 ? (
        <div className="p-4">No results found</div>
      ) : (
        items.map((item, index) => (
          <div className="relative flex items-center p-2 gap-2">
            <div className="relative">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="">User{index}</div>
            <Button
              size="icon"
              title="Make friends"
              className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
