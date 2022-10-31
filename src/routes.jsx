import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Login from './Login'
import Register from './Register'

 
function Routeres() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routeres