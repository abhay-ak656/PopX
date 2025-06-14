
import './App.css'
import DashBoard from './Component/DashBoard'
import Login from './Component/Login'
import SingUp from './Component/singup'
import Profile from './Component/Profile'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        <Route path='/PopX/login' element={<Login/>}></Route>
        <Route path='/PopX/SingUp' element={<SingUp/>}></Route>
        <Route path='/popx/profile' element={<Profile/>}></Route>
      </Routes>
     </Router>
    </>
  )
  
     
}

export default App
