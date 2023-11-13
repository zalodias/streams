import "./App.css";
import { NewStreamForm } from "./components/NewStreamForm";
import { Streams } from "./components/Streams";
import { useStreamsStore } from "./stores/useStreamsStore";

useStreamsStore();

export default function App() {
  return (
    <main className="app__content">
      <NewStreamForm />
      <Streams />
    </main>
  );
}
