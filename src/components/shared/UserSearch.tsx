"use client";

import UserSearchResult from "@/components/shared/UserSearchResult";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

export default function UserSearch() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<any[]>([]);
  const [resultVisible, setResultVisible] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResultVisible(text !== "");
      if (text) {
        setResult([1, 3, 5, 7, 8, 9, 10, 11]);
      } else {
        setResult([]);
      }
    }, 567);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="relative">
      <Search className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
      <Input
        type="search"
        placeholder="Enter email or name to find someone"
        value={text}
        onChange={onChange}
        onBlur={() => setResultVisible(false)}
        onFocus={() => setResultVisible(text !== "")}
        className="pr-9"
      />
      {resultVisible && <UserSearchResult items={result} />}
    </div>
  );
}
