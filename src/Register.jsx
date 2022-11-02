import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import Header from './components/header/Header'
import { Strong, TitleRegister, Button, ContainerRegister, Input, Form } from './styled'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Token = localStorage.getItem("Token")

  const navigate = useNavigate()

  function nagationHome() {
    navigate('/login')

  }

  async function verifyUserToken() {

    if (!Token) return alert("Error!!, Token Invalido!!")

    const decode = await api.post('/verify-token', Token)

    if (decode) return console.log("Decode")

    console.log(`${decode}`)
  }

  async function handleRegister(e) {
    try {
      e.preventDefault()
      const data = { name, email, password }

      await api.post('/register', data)

      alert('Cadastro SUCESSO!')

      return navigate('/')
    } catch (error) {
      return alert(`ERRO! ${error}`)
    }
  }

  const decodeToken = verifyUserToken()

  return (
    <>
      <Header />
      <ContainerRegister>
        <TitleRegister>Cadastro de Usuários</TitleRegister>
        <Form onSubmit={handleRegister}>
          <Strong>Nome:</Strong>
          <Input onChange={(e) => setName(e.target.value)} id="name" value={name} type="text" />
          <br />
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

          {decodeToken && Token ? <Button type="submit">Cadastrar</Button> : <Button onClick={nagationHome}>CLICKE PARA LOGAR </Button>}
        </Form>
      </ContainerRegister>
    </>
  )
}

export default Register
