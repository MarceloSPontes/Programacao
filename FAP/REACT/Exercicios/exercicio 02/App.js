import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
