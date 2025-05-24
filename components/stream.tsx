"use client";

import { updateStream } from "@/data/actions";

interface StreamProps {
  id: string;
  text: string;
}

export function Stream({ id, text }: StreamProps) {
  return (
    <form action={updateStream} className="flex flex-col gap-2">
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="text"
        defaultValue={text}
        onBlur={(event) => {
          if (event.target.value !== text) {
            event.target.form?.requestSubmit();
          }
        }}
        className="w-full"
      />
    </form>
  );
}
