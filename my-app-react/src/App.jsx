import { useState } from 'react'

import { Correo } from './loggin/correo.jsx'
import { Password } from './loggin/passwd.jsx'
import { BtnEnter } from './loggin/btnEnter.jsx'

function App() {

  const handleDatoChange = (newDato) => {
    console.log(newDato)
  }

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    const handleDatoChange = (newDato) => {
      console.log(newDato)
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}> 
        Iniciar Sesion 
        <br/><br/>
        <Correo onDatoChange={handleDatoChange}/ >   
        <br/><br/>
        <Password/>
        <br/><br/>
        <button type="submit">
          Enter
        </button>
      </form>      
    </>
  )
}

export default App
