"use client";

import { updateStream } from "@/data/actions";

interface StreamProps {
  id: string;
  text: string;
}

export function Stream({ id, text }: StreamProps) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={(event) => {
        if (event.currentTarget.textContent !== text) {
          const formData = new FormData();
          formData.append("id", id);
          formData.append("text", event.currentTarget.textContent || "");
          updateStream(formData);
        }
      }}
      onInput={(event) => {
        if (event.currentTarget.textContent === "") {
          event.currentTarget.textContent = "";
        }
      }}
      data-placeholder="What's on your mind?"
      className="outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-foreground-neutral-faded"
    >
      {text}
    </div>
  );
}
