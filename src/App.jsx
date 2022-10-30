import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'
import Header from './components/header/Header'
import { Title, ContainerUsers, Container, Card } from './styled'

function App() {
  const [users, setUsers] = useState([])

  async function handleUsers() {
    const { data } = await api.get('/all')

    setUsers(data)
  }

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <>
       <Header />
    <Container>
     
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((item) => {
          return (
            <Card key={item.id}>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  paddingBottom: '9px',
                  paddingTop: '8px',
                }}
              >
                <span style={{ paddingBottom: '8px' }}>
                  <strong>Nome:</strong>
                  {item.name}
                </span>
                <span>
                  {' '}
                  <strong> Email: </strong> {item.email}
                </span>
              </p>
            </Card>
          )
        })}
      </ContainerUsers>
      </Container>
    </>

  )
}

export default App
