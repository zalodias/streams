import { createSignal } from "solid-js";
import "./NewStreamForm.css";

export default function NewStreamForm(props) {
  const [newStream, setNewStream] = createSignal({
    id: crypto.randomUUID(),
    text: "",
    timestamp: new Date().toISOString(),
  });

  const addStream = (event) => {
    event.preventDefault();

    props.setStreams((streams) => {
      const newStreams = [...streams, newStream()];
      localStorage.setItem("streams", JSON.stringify(newStreams));
      return newStreams;
    });

    setNewStream({
      ...newStream(),
      text: "",
    });

    console.log(newStream());
  };

  const handleNewStreamTextChange = (event) => {
    setNewStream({
      ...newStream(),
      text: event.target.value,
      timestamp: new Date().toISOString(),
    });
    console.log(newStream());
  };

  return (
    <form className="new-stream-form" onSubmit={addStream}>
      <input
        autoFocus
        className="new-stream-form__input"
        type="text"
        value={newStream().text}
        onInput={handleNewStreamTextChange}
        placeholder="What's on your mind?"
      />
    </form>
  );
}
