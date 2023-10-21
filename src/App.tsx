import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Landing from './components/Landing'
import Container from './components/Container'

function App() {

  const title = 'Card title'
  const name = 'Teolinlés'
  const role = 'Frontend'
  const experience = 4

  const [count, setCount] = useState(1) //!0 => valor inicial
  const [user, setUser] = useState({
    "userId": 0,
    "id": 0,
    "title": "",
    "completed": false
  })

  useEffect(() => {
    //! EJECUTA
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then(response => response.json())
      .then(json => {
        setUser(json)
    })

    const interval = setInterval( ()=> {
      console.log('INTERVAL')
    }, 1000)
    return () => {
      console.log('LIMPIADO')
      clearInterval(interval)
      //! SE EJECUTA CUANDO EL COMPONENTE SE MUERE
      //! LIMPIAR EVENTOS QUE GENEREN PÉRDIDA DE MEMORIA =======> setInterval  
    }

    }, [count])//! ESCUCHA A LAS VARIABLES
  
  function subtractCounter() {
    setCount(count-1);
  }

  return (
   <React.Fragment>
      <Landing name={name} role={role} experience={experience}  count={count} setCount={setCount}/>
      <Card title={title} age={20} />

      <hr /><hr />
      <button onClick={subtractCounter}>Click: subtract a counter</button>

      <hr /><hr /><hr />
      {user.title}

      {count >= 19 ? <div>Se llegó a 19</div> : <div>No se llega</div>}
    
      <hr /><hr /><hr />
      <Container>
        <h1>Hola amigos</h1>
      </Container>

   </React.Fragment>
  )
}

export default App
