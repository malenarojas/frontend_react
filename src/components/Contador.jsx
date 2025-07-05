import { useState } from "react";
function Contador(){
    const [conteo ,setConteo ]= useState(0);

    const incrementar = ()=>{
        setConteo(conteo + 1);
    }
    const decrementar = () =>{
        setConteo(conteo-1)
    }

    return(
        <div>
            <h2>Contador: {conteo}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}
export default Contador;