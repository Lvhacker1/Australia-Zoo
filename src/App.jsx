
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Mammals from './pages/Mammals'
import Reptiles from './pages/Reptiles'
import Birds from './pages/Birds'

function App() {

  return (
    <>
    <Routes>
      <Route element= {<Layout/>}>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Mammals' element= {<Mammals/>} />
        <Route path='/Reptiles' element= {<Reptiles/>} />
        <Route path='/Birds' element= {<Birds/>} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
