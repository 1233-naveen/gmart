import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';



export default function Login() {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({ username: "", password: "" })

    function handleOnChange(e) {
        e.preventDefault()
        if (e.target.id == 'username') {
            setLoginData({...loginData,[e.target.id]:e.target.value})
        } else if (e.target.id == 'password') {
            setLoginData({...loginData,[e.target.id]:e.target.value})
        }
    }

    
    function onSubmitLogin(e){
        e.preventDefault()
            axios.post("http://localhost:8000/users/login",loginData)
            .then((res)=> {
                // if(res.data.Login){
                //     Cookies.set("username",res.data.username)
                //     navigate("/")
                // }else{
                //     console.log(res)
                // }
                console.log(res)
            
            })
           
            
          
            
        
    }
  

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}
            noValidate
            autoComplete="off"

        >
            <div>
                <TextField
                    margin='normal'
                    id="username"
                    label="Email"
                    variant='filled'
                    fullWidth
                    onChange={handleOnChange}
                />
                <TextField
                    margin='normal'
                    id="password"
                    label="Password"
                    variant='filled'
                    fullWidth
                    onChange={handleOnChange}
                />
                <Button variant="contained" onClick={onSubmitLogin}>Login</Button>
            </div>
        </Box>
    );
}