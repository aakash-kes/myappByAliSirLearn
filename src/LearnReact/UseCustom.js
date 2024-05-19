import { useState } from 'react'

const UseCustom = () => {
  const [count, setCount] = useState(0);

  const update = () => {
    setCount(count + 1);
  }
  return {
    count,
    update,
  }
}

export default UseCustom
