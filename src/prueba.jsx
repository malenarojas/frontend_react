
const nombre = "malena"
const elemento = <h1>¡Hola, {nombre}!</h1>; 

function Saludo(props){
    return <h1>hola mundo {props.nombre}</h1>
}

function Appp(){
    return <Saludo nombre="Carlos"/>
}