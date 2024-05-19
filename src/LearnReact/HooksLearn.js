import React, { useEffect, useState } from 'react'

const HooksLearn = () => {
  const [count, setCount] = useState(0)

  const updateState = () => {
    setCount(count + 2)
  }
  useEffect(() => {
    console.log('this is useEffect')
  })

  return (
    <>
      <h1>here is count {count}</h1>
      <button onClick={updateState}>Click Here</button>
    </>
  )
}

export default HooksLearn
