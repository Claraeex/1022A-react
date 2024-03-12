import './App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "Tai"
  let sobrenome = "Dias"
  return (
    <>
    <MeuComponente/>
     <h1 className="meu-nome">Olá {nome} {sobrenome}</h1>
     <h1>Olá {nome} {sobrenome}</h1>

    </>
   
  ) //JSX - Javascript XML
}
export default App
