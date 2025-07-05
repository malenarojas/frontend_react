import { useCounterStore } from './ContadorStore.js';

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>➕ Incrementar</button>
      <button onClick={decrement}>➖ Decrementar</button>
      <button onClick={reset}>🔁 Reiniciar</button>
    </div>
  );
}

export default Counter;