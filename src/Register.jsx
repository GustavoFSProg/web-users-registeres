import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import Header from './components/header/Header'
import { Strong, TitleRegister, Button, ContainerRegister, Input, Form } from './styled'

function Register() {
  const [name, setName] = useState('Vireira')
  const [email, setEmail] = useState('vaav@gmail.com')
  const [password, setPassword] = useState('1234')

  const Token = localStorage.getItem('Token')

  const navigate = useNavigate()

  function nagationHome() {
    navigate('/login')
  }

  async function handleRegister(e) {
    try {
      e.preventDefault()
      const token = localStorage.getItem('Token')

      if (!token) return alert("ERROR,Token nulo!")

      console.log(token)

      const { data } = await api.post('/verify-token')

      if (!data?.isValidToken) return alert(`ERROR, Token Invalido!! `), console.log(data)
      console.log(data)

      const dados = { name, email, password }

      await api.post('/register', dados)

      alert('Cadastro SUCESSO!')

      return navigate('/')
    } catch (error) {
      return alert(`ERRO! ${error}`)
    }
  }


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

          {Token ? (
            <Button type="submit">Cadastrar</Button>
          ) : (
            <Button onClick={nagationHome}>CLICKE PARA LOGAR </Button>
          )}
        </Form>
      </ContainerRegister>
    </>
  )
}

export default Register
