import React from 'react'

import MArlon from '../MArlon.jpg'

const About = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            marginLeft: '20%',
            textAlign: 'left',
            fontWeight: 'bold',
            marginTop: '5%',
          }}
        >
          <h1>
            Hi,
            <br />I am Marlon
            <br /> Web Designer
          </h1>
          <button style={{ backgroundColor: 'blue', color: 'white' }}>
            Contact
          </button>
        </div>

        <img
          style={{ borderRadius: '20%', marginRight: '150px', marginTop: '5%' }}
          src={MArlon}
          alt="Logo"
          height="200px"
          width="200px"
        />
      </div>
    </>
  )
}

export default About
