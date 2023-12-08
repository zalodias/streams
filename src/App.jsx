import Container from "./components/Container";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Streams from "./components/Streams";

export default function App() {
  return (
    <Layout>
      <Container>
        <Header />
        <Streams />
      </Container>
    </Layout>
  );
}
