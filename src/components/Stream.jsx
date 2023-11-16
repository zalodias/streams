import { createSignal } from "solid-js";
import useStreamsStore from "../stores/useStreamsStore";
import "./Stream.css";

export default function Stream({ id, text, timestamp }) {
  const [value, setValue] = createSignal(text);
  const { updateStream } = useStreamsStore();

  const handleInputChange = (event) => {
    const updatedText = event.target.value;
    setValue(updatedText);
    updateStream(id, updatedText);
  };

  const date = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleString(undefined, options);

  return (
    <li className="stream">
      <span className="stream__timestamp">{formattedDate}</span>
      <textarea
        className="stream__text"
        value={value()}
        onInput={handleInputChange}
      />
    </li>
  );
}
