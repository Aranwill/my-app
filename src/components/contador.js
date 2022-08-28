import {useState} from 'react'


const Contador = () => {

    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1 );
    const restar = () => setContador(contador - 1 );
    const reset = () => setContador (0);

  return (
    <>
    <div style={{display: "flex", padding: "200px", justifyContent: "center"}}>
        <button onClick={sumar}>+</button>
        <h3>{contador}</h3>
        <button onClick={restar}>-</button>
        <button onClick={reset}>reset</button>
    </div>

    </>
  );
}

export default Contador;

