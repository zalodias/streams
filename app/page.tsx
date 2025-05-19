"use client";

import { Container } from "@/components/container";
import streams from "@/data/streams.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [streamsList, setStreamsList] = useState(streams);

  useEffect(() => {
    fetch("/api/streams")
      .then((res) => res.json())
      .then((data) => setStreamsList(data))
      .catch(console.error);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const newEntry = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      created_time: new Date().toISOString(),
      updated_time: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/streams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });

      if (!response.ok) throw new Error("Failed to add stream");

      const savedEntry = await response.json();
      setStreamsList([...streamsList, savedEntry]);
      setInputValue("");
    } catch (error) {
      console.error("Error adding stream:", error);
    }
  };

  const handleContentChange = async (id: string, newText: string) => {
    const streamToUpdate = streamsList.find((s) => s.id === id);
    if (!streamToUpdate) return;

    const updatedStream = {
      ...streamToUpdate,
      text: newText,
      updated_time: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/streams", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStream),
      });

      if (!response.ok) throw new Error("Failed to update stream");

      setStreamsList(
        streamsList.map((stream) => (stream.id === id ? updatedStream : stream))
      );
    } catch (error) {
      console.error("Error updating stream:", error);
    }
  };

  return (
    <Container className="pt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border-b border-background-neutral-strong pb-3"
        />
      </form>
      <ul className="grid gap-2">
        {streamsList
          .map((stream) => (
            <li
              key={stream.id}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleContentChange(
                  stream.id,
                  e.currentTarget.textContent || ""
                )
              }
              dangerouslySetInnerHTML={{ __html: stream.text }}
            />
          ))
          .reverse()}
      </ul>
    </Container>
  );
}
