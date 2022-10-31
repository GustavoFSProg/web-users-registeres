import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import Header from './components/header/Header'
import { Strong, TitleRegister, Button, ContainerRegister, Input, Form } from './styled'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleRegister(e) {
    try {
      e.preventDefault()
      const dados = { email, password }

      const { data } = await api.post('/login', dados)

      alert(`Login SUCESSO! `)

      localStorage.setItem('Token', data.token)

      return navigate('/')
    } catch (error) {
      return alert(`ERRO! ${error}`)
    }
  }

  return (
    <>
      <Header />
      <ContainerRegister>
        <TitleRegister>Login</TitleRegister>
        <Form onSubmit={handleRegister}>

          <Strong>Email:</Strong>

          <Input onChange={(e) => setEmail(e.target.value)} id="email" value={email} type="email" />
          <br />

          <Strong>Senha:</Strong>

          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            value={password}
            type="password"
          />
          <br />
          <Button type="submit">Logar</Button>
        </Form>
      </ContainerRegister>
    </>
  )
}

export default Login
