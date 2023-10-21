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

  // let counter = 0;
  const [count, setCount] = useState(1) //! EL 0 ES EL VALOR INICIAL
  const [user, setUser] = useState({
    "userId": 0,
    "id": 0,
    "title": "",
    "completed": false
  }
  ) //! EL 0 ES EL VALOR INICIAL


  useEffect(() => {
    //!EJECUTA
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then(response => response.json())
      .then(json => {
        setUser(json)
      })

      const interval = setInterval( ()=> {
        console.log('INTERVAL')
      } ,1000 )

    return () => {
      console.log('LIMPIADO')
      clearInterval(interval)
      //! SE EJECUTA CUANDO EL COMPONENTE SE MUERE
      //! LIMPIAR EVENTOS QUE GENEREN PERDIDA DE MEMORIA =====> setInterval
    }
  }, [count])//! ESCUCHA A LAS VARIABLES
  



  function addCounter(){
    setCount(count+1) //!count = count+1
  }

  return (
   <React.Fragment>
      <Landing name={name} role={role} experience={experience} count={count} setCount={setCount} />
      <Card title={title} age={20} />

      <hr /><hr />

      <h3>{count}</h3>
      {/* <button onClick={ () => { 
        addCounter() 
        } }>click</button> */}

      <button onClick={ addCounter }>click</button>

      <hr /><hr /><hr />
      {user.title}


      {/* { count >= 19 && <div>SE LLEGO A 19</div>  } */}
      { count >= 19 ? <div>SE LLEGO A 19</div> : <div>aun no se llega</div> }

      <hr /><hr /><hr />
      

      <Container >
          Hola amigos
      </Container>

   </React.Fragment>
  )
}

export default App
