import { useState } from 'react';
import './App.css';



function App() {

  const acertou = "Parabéns você acertou o número sorteado!!";
  const errou = "Que pena tente novamente";

  let valorSorteado = Math.floor(Math.random() * 10 + 1);

  const [valor, setValor] = useState("");

  const pegarValor = (event) => {
        setValor(event.target.value)
  }

  let valorDigitado = valor;
  const status = valorSorteado === Number(valorDigitado) ? acertou : errou;
  

  return (
    <div className="App">

      <main className='container'>

        <h1 className='titulo'>Acerte o número entre 1 e 10</h1>

        <input className='entrada' type='number' value={valor} onChange={pegarValor} />


        <h3 className='numeros'>O valor Digitato foi: {valorDigitado}</h3>
        <h3 className='numeros'>O valor Sorteado foi: {valorSorteado}</h3>

        <p className='status'>{status}</p>
      </main>

    </div>
  );
}

export default App;
