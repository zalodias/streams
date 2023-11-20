import Container from "./components/Container";
import Layout from "./components/Layout";
import NewStreamForm from "./components/NewStreamForm";
import Streams from "./components/Streams";

export default function App() {
  return (
    <Layout>
      <Container>
        <NewStreamForm />
        <Streams />
      </Container>
    </Layout>
  );
}
