import { createSignal } from "solid-js";
import Container from "./components/Container";
import Header from "./components/Header";
import Layout from "./components/Layout";
import NewStreamForm from "./components/NewStreamForm";
import Streams from "./components/Streams";

const storage = JSON.parse(localStorage.getItem("streams")) || [];

export default function App() {
  const [streams, setStreams] = createSignal(storage);

  return (
    <Layout>
      <Container>
        <Header />
        <NewStreamForm setStreams={setStreams} />
        <Streams streams={streams().slice().reverse()} />
      </Container>
    </Layout>
  );
}
