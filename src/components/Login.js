import React, { useState} from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import axios from 'axios';
import { Link, useNavigate,} from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState(false);
  console.log(email)
  console.log(password)
  console.log(error)
  const validateSubmit=async(e)=>{
    setError(false);
    e.preventDefault();
    try{
    const res=  await axios.post("http://my-doctors.net:8090/authentication",{
        email:email,
        password:password,
        strategy:"local"
      })
      const role=await res.data.user.role;
      (role=="patient")?navigate("/Patient"):navigate("/Doctors")
      
    }
     catch(err)  {
      setError(true);
     } 
  }
  return (
    <div>
        {error && <Alert severity="error" sx={{mb:3}}>Mobile Number/Email or password is incorrect. Please try again.</Alert>}
    <form onSubmit={validateSubmit}>
      <TextField id="outlined-basic"  label="Email or Mobile Number" variant="outlined" value={email} onChange={(e=>setEmail(e.target.value))} required fullWidth/> <br /> <br /> 
      <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={(e=>setPassword(e.target.value))} required fullWidth/> <br /> <br /> 
      <Box sx={{ display:"flex", justifyContent: 'space-between' }}>
      <Button type="submit" variant="contained" sx={{backgroundColor:"#3f51b5"}} >Login</Button>
      <a href="">Forgot Password?</a>
      </Box>
    </form> <br /> 
    <p>Don't have an account?
    <a href="/auth/signup"> Sign up</a>
    </p>
    </div>
  )
}
