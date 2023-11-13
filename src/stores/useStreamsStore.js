import { createSignal } from "solid-js";
// import data from "../lib/notion.json";

export function useStreamsStore() {
  // const streams = data.map((item) => ({
  //   id: item.id,
  //   text: item.paragraph.rich_text[0].plain_text,
  //   timestamp: item.created_time,
  // }));

  // localStorage.setItem("streams", JSON.stringify(streams));

  const [streams, setStreams] = createSignal(
    JSON.parse(localStorage.getItem("streams")) || []
  );

  const addStream = (newStream) => {
    setStreams((prevStreams) => {
      const newStreams = [...prevStreams, newStream];
      localStorage.setItem("streams", JSON.stringify(newStreams));
      return newStreams;
    });
  };

  const updateStream = (id, newText) => {
    setStreams((prevStreams) => {
      const updatedStreams = prevStreams.map((stream) =>
        stream.id === id ? { ...stream, text: newText } : stream
      );
      localStorage.setItem("streams", JSON.stringify(updatedStreams));
      return updatedStreams;
    });
  };

  return { streams, addStream, updateStream };
}
