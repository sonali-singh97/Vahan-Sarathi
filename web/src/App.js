import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Layout from "./components/Layout"

function App() {
  return (
      <Container fluid>
         <Header />
        <div className="wrapper">
         <Layout />
        </div>
      </Container>

  );
}

export default App;
