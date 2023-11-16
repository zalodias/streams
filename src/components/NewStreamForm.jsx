import { createSignal } from "solid-js";
import useStreamsStore from "../stores/useStreamsStore";
import "./newStreamForm.css";

export default function NewStreamForm() {
  const [newStreamText, setNewStreamText] = createSignal("");
  const { addStream } = useStreamsStore();

  const handleNewStreamTextChange = (event) => {
    setNewStreamText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newStream = {
      id: crypto.randomUUID(),
      text: newStreamText(),
      timestamp: new Date().toISOString(),
    };

    addStream(newStream);
    setNewStreamText("");
  };

  return (
    <form className="new-stream-form" onSubmit={handleFormSubmit}>
      <input
        autoFocus
        className="new-stream-form__input"
        type="text"
        value={newStreamText()}
        onInput={handleNewStreamTextChange}
        placeholder="What's on your mind?"
      />
    </form>
  );
}
