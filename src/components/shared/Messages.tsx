"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatScroll } from "@/hooks/useChatScroll";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function Messages({ className = "" }: { className?: string }) {
  const chatRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [showOverlay, setShowOverlay] = useState(true);

  useChatScroll({
    chatRef,
    bottomRef,
    loadMore: () => {},
    shouldLoadMore: false,
    count: 0,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowOverlay(false);
    }, 666);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="absolute inset-x-0 inset-y-16 bg-white z-10"></div>
      )}

      <div
        ref={chatRef}
        className={cn(
          "relative flex flex-col gap-4 overflow-y-auto",
          className
        )}
      >
        {new Array(22).fill("").map((_, index) => (
          <div key={Math.random()} className="flex gap-4">
            <Avatar className={cn(index % 2 === 0 ? "order-1" : "order-2")}>
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div
              className={cn(
                "max-w-[60%] bg-primary text-white p-2 rounded-md",
                index % 2 === 0 ? "order-2 bg-slate-500" : "order-1 ml-auto"
              )}
            >
              Msg {index}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </>
  );
}
