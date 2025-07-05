import { useEffect, useState } from "react";
function TituloDocumento(){
    const[contador,setContador]= useState(0);
    useEffect(()=>{
        document.title = `Contador: ${contador}`;
        console.log('titulo del documento actulizado');

    },[contador]
    );
    return(
        <div style={{ border: '1px solid lightgreen', padding: '15px', margin: '20px'}}>
            <h3>actulizando el titulo del docuemnto </h3>
            <p>El ttulo de la pestaña de tu navegador cambiara con este contador </p>
            <p>Contador actual:{contador}</p>
             <button onClick={()=>setContador(contador+1)}>Incrementarcontador</button>
            </div>
    );
}

export default TituloDocumento