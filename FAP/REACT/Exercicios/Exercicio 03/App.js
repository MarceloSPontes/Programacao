import logo from './logo.svg';
import './App.css';
import HelloWord from './components/ComponenteReact';
import ComponenteReact from './components/ComponenteReact';
import ComponenteSecundario from './components/ComponenteSecundario';

function App() {
  return (
    <div className="App">
      <h1>Projeto de Marcelo Pontes</h1>
      <p>Ola Mundo</p>
      <p>Primeiro App com REACT</p>
      <div class="form-goup">
        <label for="title">Você esta gostando de REACT?</label>
        <br></br>
      </div>
      <div class="form-goup">
        <textarea placeholder="Sua resposta:" required></textarea>
      </div>
      <div class="form-goup">
        <label for="title">Qual biblioteca você mais gostou ate agora?</label>
        <br>
        </br>
      </div>
      <div class="form-goup">
        <textarea placeholder="Sua resposta" required></textarea>
      </div>
      <ComponenteReact />
    </div>
  );
}

export default App;
