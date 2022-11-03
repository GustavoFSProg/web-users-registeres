import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import Header from './components/header/Header'
import { Strong, TitleRegister, Button, ContainerRegister, Input, Form } from './styled'

function Register() {
  const [name, setName] = useState('Vireira')
  const [email, setEmail] = useState('vv@gmail.com')
  const [password, setPassword] = useState('1234')

  const Token = localStorage.getItem('Token')

  const navigate = useNavigate()

  function nagationHome() {
    navigate('/login')
  }

  async function verifyUserToken() {
    const token = localStorage.getItem('Token')

    console.log(token)

    // const { decode } = await api.post('/verify-token')

    // if (!decode) return alert('ERROR, not decoding')
    // console.log(decode)

    return decode

    // if (!Token) return alert('Error!!, Token Invalido!!')
    // const decode = await api.post('/verify-token', token)
    // const decode = await api.post(`/verify-token`, token)
    // const decode = await api.post('/verify-token')

    // const decode = await api.post('/verify-token',
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Acess-Control-Allow-Origin': '*',
    //       'Authorization': `token ${token}`,
    //       'Accept': "application/json"
    //     }
    //   })

    // const decode = await api.post('/verify-token', token)
    // axios.post(url, data, {
    //   headers: {
    //     'Authorization': `Basic ${token}`
    //   },
    // })

    // const instance = axios.create({
    //   baseURL: 'http://localhost:5000',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Acess-Control-Allow-Origin': '*',
    //     'Authorization': `token ${Token}`,
    //     'Accept': "application/json"
    //   }
    // })

    // const { decode } = await instance.get('/verify-token', Token)

    // console.log(decode)

    // if (!decode) return console.log('error Decode')

    // return decode

  }

  async function handleRegister(e) {
    try {
      e.preventDefault()
      const token = localStorage.getItem('Token')

      console.log(token)

      const decode = await api.post('/verify-token')

      if (!decode) return alert('ERROR, not decoding')
      console.log(decode)

      // if (!Token) return alert('Error!!, Token Invalido!!')
      // const decode = await api.post('/verify-token', token)
      // const decode = await api.post(`/verify-token`, token)

      // verifyUserToken()



      const data = { name, email, password }

      await api.post('/register', data)

      alert('Cadastro SUCESSO!')

      return navigate('/')
    } catch (error) {
      return alert(`ERRO! ${error}`)
    }
  }

  const decord = verifyUserToken()

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

          {decord ? (
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
