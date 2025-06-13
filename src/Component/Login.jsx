import './DashBoard.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
       

      let [email,setEmail]=useState('');
      let [password,setPassword]=useState('');
      let navigate=useNavigate();
    return (
        <div className="main-page h-[80%] w-[20rem] bg-white flex">
            <div className="main-conatiner flex flex-col justify-start p-6 gap-5 w-full h-auto text-sm">
                <h2 className='text-2xl font-bold '>Singin to your<br></br>
                    PopX Account</h2>
                <p>Welcome back! Please enter your details.</p>
                <TextField
                    label="Email Address"
                    placeholder="Enter email Address"
                    value={email}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        '& label': {
                            color: '#6c25ff',
                        },
                        '& label.Mui-focused': {
                            color: '#6c25ff', 
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ccc', 
                            },
                            '&:hover fieldset': {
                                borderColor: '#999', 
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000', 
                            },
                            padding:'0rem'
                        },
                        
                    }}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                    label="password"
                    placeholder="Enter password"
                    type='password'
                    value={password}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        '& label': {
                            color: '#6c25ff',
                        },
                        '& label.Mui-focused': {
                            color: '#6c25ff', 
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ccc',
                            },
                            '&:hover fieldset': {
                                borderColor: '#999', 
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000', 
                            }
                        }
                    }}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button style={{ fontWeight: 'bold', outline: 'none', color: 'white' }} className='Loginbtn' onClick={()=>{navigate('/PopX/profile')}}>Login</button>
            </div>
        </div>
    )
}