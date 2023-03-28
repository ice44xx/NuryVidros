import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarWorks from './pages/Work/NavbarWorks'
import Home from './pages/Home/LandingPage'
import Janelas from './pages/Work/Janelas'
import Portas from './pages/Work/Portas'
import Box from './pages/Work/Box'
import Cercamentos from './pages/Work/Cercamentos'
import Pergolados from './pages/Work/Pergolados'
import Retrateis from './pages/Work/Retrateis'
import Coberturas from './pages/Work/Coberturas'
import Esquadrias from './pages/Work/Esquadrias'
import Espelhos from './pages/Work/Espelhos'
import Privacy from './pages/PrivacyPolicy/privacy'
import Redes from './components/Redes'

import './sass/index.scss'
import './sass/style.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>

          <Route path='/trabalhos/janelas' element={
          <>
            <NavbarWorks />
            <Janelas />
            <Redes/>
          </>} />

          <Route path='/trabalhos/portas' element={
          <>
            <NavbarWorks />
            <Portas />
            <Redes/>
          </>} />

          <Route path='/trabalhos/box' element={
          <>
            <NavbarWorks />
            <Box />
            <Redes/>
          </>} />

          <Route path='/trabalhos/coberturas' element={
          <>
            <NavbarWorks />
            <Coberturas />
            <Redes/>
          </>} />

          <Route path='/trabalhos/esquadrias' element={
          <>
            <NavbarWorks />
            <Esquadrias />
            <Redes/>
          </>} />

          <Route path='/trabalhos/espelhos' element={
          <>
            <NavbarWorks />
            <Espelhos />
            <Redes/>
          </>} />

          <Route path='/trabalhos/cercamentos' element={
          <>
            <NavbarWorks />
            <Cercamentos />
            <Redes/>
          </>} />

          <Route path='/trabalhos/pergolados' element={
          <>
            <NavbarWorks />
            <Pergolados />
            <Redes/>
          </>} />

          <Route path='/trabalhos/portas-retrateis' element={
          <>
            <NavbarWorks />
            <Retrateis />
            <Redes/>
          </>} />

          <Route path='/politica-de-privacidade' element={
          <>
            <NavbarWorks />
            <Privacy/>
            <Redes/>
          </>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
