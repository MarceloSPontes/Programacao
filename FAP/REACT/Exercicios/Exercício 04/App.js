import './App.css';
import Pessoa from './components/Pessoa';

function App() {
const nome = 'Maria'

  return (
    <div className="App">
      <h1>Projeto de Marcelo Pontes</h1>
      <p>Primeiro App com REACT</p>
      <Pessoa nome="Marcelo" idade='42' profissao='Desempregado' foto='https://via.placeholder.com/150'
      />
    </div>
  );
}

export default App;
