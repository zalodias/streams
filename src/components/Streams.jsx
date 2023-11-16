import { For } from "solid-js";
import useStreamsStore from "../stores/useStreamsStore";
import Stream from "./Stream";
import "./Streams.css";

export default function Streams() {
  const { streams } = useStreamsStore();

  return (
    <ul className="streams">
      <For each={streams().slice().reverse()}>
        {(stream) => (
          <Stream
            id={stream.id}
            text={stream.text}
            timestamp={stream.timestamp}
          />
        )}
      </For>
    </ul>
  );
}
