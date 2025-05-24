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
      className="outline-none"
    >
      {text}
    </div>
  );
}
