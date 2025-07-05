import { useEffect, useRef, useState } from "react";
function ContadorConProgreso(){
     const [conteo, setConteo] = useState(0);
     const progressBarRef = useRef(null);
     const Max_Contador = 10 ;
     useEffect(()=>{
        if(progressBarRef.current){
            const porcentaje =(conteo/Max_Contador)*100;
            const anchoBarra = Math.max(0,Math.min(100,porcentaje));
             progressBarRef.current.style.width = `${anchoBarra}%`;
             progressBarRef.current.style.backgroundColor = anchoBarra > 75 ? 'green' : anchoBarra > 50 ? 'orange' : 'red';

        }

     },[conteo]);

      const incrementar = () => {
    setConteo(prevConteo => prevConteo + 1);
  };

  const decrementar = () => {
    setConteo(prevConteo => prevConteo - 1);
  };

  return(
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>Contador y Barra de Progreso</h2>
      <p>Valor del Contador: **{conteo}**</p>
      <button onClick={incrementar} style={{ marginRight: '10px' }}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <div style={{ marginTop: '20px', width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
        <div
          ref={progressBarRef} // Asignamos la referencia al elemento DOM
          style={{
            height: '100%',
            width: '0%', // Ancho inicial
            backgroundColor: 'lightgray', // Color inicial
            transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out', // Transición suave
            borderRadius: '5px'
          }}
        ></div>
        
      </div>
      <p style={{ fontSize: '0.8em', color: '#666' }}>
        El color de la barra cambia: Rojo (&lt;50%), Naranja (50-75%), Verde (&gt;75%).
      </p>
      </div>
  )
}
export default ContadorConProgreso;