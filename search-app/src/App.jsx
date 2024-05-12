import { useState } from 'react'
import './App.css'
import Search from './search/search'

function App() {
  return (
    <>
      <h1>Buscador de personal</h1>
      <div className="card">
       <Search/>
      </div>
    </>
  )
}

export default App
