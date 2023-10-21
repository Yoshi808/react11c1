import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const title = 'Card title'

  return (
   <React.Fragment>
      <Card title={title} age={20} />
   </React.Fragment>
  )
}

export default App
