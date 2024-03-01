
import './App.css'
import Home from './componenets/Home'
import About from './componenets/About'
import Shop from './componenets/Shop'
import { BrowserRouter as Router,Route,Routes,Link, NavLink } from 'react-router-dom'
import ('tailwindcss')

function App() {

  return (
     <div >
      
        <Router>
          <div className="">
         <Link to="/Home" >Home </Link>
         <Link to="/About" >About</Link>
         <Link to="/Shop" >Shop</Link>
        </div>
       
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Shop' element={<Shop/>}/>
        </Routes>
       
        </Router>

     </div>
  )
}

export default App
