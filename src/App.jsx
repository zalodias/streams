import Header from "./components/Header";
import Container from "./components/Container";
import Layout from "./components/Layout";
import NewStreamForm from "./components/NewStreamForm";
import Streams from "./components/Streams";

export default function App() {
  return (
    <Layout>
      <Header />
      <Container>
        <NewStreamForm />
        <Streams />
      </Container>
    </Layout>
  );
}
