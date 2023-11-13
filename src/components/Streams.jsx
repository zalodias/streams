import { useStreamsStore } from "../stores/useStreamsStore";
import { Stream } from "./Stream";
import "./Streams.css";

export function Streams() {
  const { streams } = useStreamsStore();

  return (
    <ul className="streams">
      {streams()
        .slice()
        .reverse()
        .map((stream) => (
          <Stream
            id={stream.id}
            text={stream.text}
            timestamp={stream.timestamp}
          />
        ))}
    </ul>
  );
}
