import { For } from "solid-js";
import Stream from "./Stream";
import "./Streams.css";

export default function Streams(props) {
  return (
    <ul className="streams">
      <For each={props.streams}>
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
