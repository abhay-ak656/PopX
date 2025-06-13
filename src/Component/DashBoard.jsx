import './DashBoard.css'
import { useNavigate } from 'react-router-dom'
export default function DashBoard(){

    let navigate=useNavigate();

    return(
        <div className="main-page h-[80%] w-[20rem] bg-white flex">
            <div className="main flex flex-col justify-end p-6 gap-3 w-full">
                <h2 className='text-2xl font-bold'>Welcome to PopX</h2>
                 <p>Manage your customers and grow<br></br> your business with ease on PopX.</p>
                 <button style={{backgroundColor:'#6c25ff', color:'white', outline:'none'}} onClick={()=>{navigate('/PopX/SingUp')}}>Create Account</button>
                 <button style={{backgroundColor:'#cebafb',fontWeight:'bold' ,outline:'none'}} className='singupbtn' onClick={()=>{navigate('/PopX/login')}}>Already Registerd? Login</button>
            </div>
        </div>
    )
}