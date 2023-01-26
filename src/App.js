import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import FormTareas from './components/FormTareas';


function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <Subtitulo></Subtitulo>
        <FormTareas></FormTareas>
      </Container>


    </>
  );
}

export default App;
