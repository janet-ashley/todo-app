import { useStoreCount } from "../Stores/Bears"

function Counter() {
  const { bears ,decrement, increment, rest} =  useStoreCount()

  return (
    <div className='main'>
       <p>Bears : {bears}</p>
       <button onClick={increment}>+1</button>
       <button onClick={decrement}>-1</button>
       <button onClick={rest}>Rest</button>
    </div>
  )
}

export default Counter