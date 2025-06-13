import { useState } from 'react';
import './DashBoard.css'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
export default function SingUp(){
       
      let [name,setName]=useState('');
      let [number,setNumber]=useState('');
      let [email,setEmail]=useState('');
      let [value,setValue]=useState('yes');
      let [password,setPassword]=useState('');
      let [companyName,setCompanyName]=useState('');
      let navigate=useNavigate();

      let radioinput=(e)=>{
        setValue(e.target.value);
      }

      let handleSubmit=(e)=>{
        e.preventDefault();
        setName('');
        setNumber('');
        setEmail('');
        setPassword('');
        setCompanyName('');
        navigate('/PopX/profile')
      }
    return (
         <div className="main-page h-[80%] w-[20rem] bg-white flex">
                    <form className="main-conatiner flex flex-col justify-start p-6 gap-5 w-full h-full text-sm" onSubmit={handleSubmit}>
                        <h2 className='text-2xl font-bold '>Create your<br></br>
                            PopX Account</h2>
                      
                        <TextField
                            label={  
                            <span>Full Name<span style={{color:'red'}}>*</span></span>
                        }
                            placeholder="Marry Doe"
                            InputLabelProps={{ shrink: true }}
                            value={name}
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
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <TextField
                            label={
                                <span>Phone Number<span style={{color:'red'}}>*</span></span>
                            }
                            placeholder="+123456789"
                            value={number}
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
                            onChange={(e)=>{setNumber(e.target.value)}}
                        />
                         <TextField
                            label={  
                            <span>Email Address<span style={{color:'red'}}>*</span></span>
                        }
                            placeholder="Enter email address"
                            type='email'
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
                                    }
                                }
                            }}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                         <TextField
                            label={  
                            <span>password<span style={{color:'red'}}>*</span></span>
                        }
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
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                         <TextField
                            label="Companay name"
                            placeholder="Educase India"
                            value={companyName}
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
                            onChange={(e)=>{setCompanyName(e.target.value)}}
                        />
                        
                    <FormControl required>
                        <FormLabel id='radio-controled-agent'sx={{
                            color:'black',
                                '&.Mui-focused': {
                                    color: 'black', 
                                }
                        }} >Are you an agent?</FormLabel>
                        <RadioGroup
                        aria-labelledby='radio-controled-agent'
                        name='controled-agent-group'
                        value={value}
                        onChange={radioinput}
                        sx={{
                            
                            display:'flex' 
                            ,flexDirection:'row'
                        
                        }}
                        >
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                         <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </RadioGroup>
    
                    </FormControl>
                        <button style={{backgroundColor:'#6c25ff', color:'white', outline:'none'}} className='mt-auto' type='submit'>Create Account</button>
                    </form>
                </div>
    )
}