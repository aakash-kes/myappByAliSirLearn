import React from 'react'
import UseCustom from './UseCustom'

const UseCustomUse = () => {
  const data = UseCustom()

  return (
    <>
      <h1>counting{data.count}</h1>
      <button onClick={data.update}>Clickme</button>

      {/* <img src={process.env.PUBLIC_URL + '/akku.jpeg'} /> */}
    </>
  )
}

export default UseCustomUse
