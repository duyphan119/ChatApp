"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { MAX_ROWS } from "@/constants";

export default function MessageForm({
  className = "",
}: {
  className?: string;
}) {
  const [rows, setRows] = useState(1);
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState<number | undefined>();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      setTextareaHeight(textareaRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea && textareaHeight) {
      textarea.style.height = "auto";
      let newHeight = Math.min(
        Math.max(textarea.scrollHeight, textareaHeight),
        textareaHeight * 3
      );
      textarea.style.height = newHeight + "px";
      textarea.scrollTop = textarea.scrollHeight;
    }
  }, [textareaHeight, text]);

  return (
    <div className={className}>
      <div className="flex gap-4">
        <Textarea
          ref={textareaRef}
          rows={rows}
          value={text}
          onChange={handleChange}
          placeholder="Message"
        />
        <Button title="Send message" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
