import React from 'react'
import './App.css'
import Card from './components/Card'
import Landing from './components/Landing'

function App() {

  const title = 'Card title'
  const name = 'Dionicio'
  const role = 'Frontend'
  const experience = 4
  return (
   <React.Fragment>
      <Landing name={name} role={role} experience={experience} />
      <Card title={title} age={20} />
   </React.Fragment>
  )
}

export default App
