import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Label } from '@radix-ui/themes/components/context-menu';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Link, Spinner, TextField } from '@radix-ui/themes';
import { useNavigate } from 'react-router';
import { USER_API_END_POINT } from '../utils/constant.js';
import { setLoading } from '../redux/authSlice.js';

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {loading, user} = useSelector(store=>store.auth);
    const [input, setInput] = useState({
        email:"",
        password:""
    });

    const changeEventHandler = (e) =>{
        setInput({...input, [e.target.name]:e.target.value});
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        
        
        
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type":"application/json"
                },
                withCredentials: true,
            })
            if (res.data.success) {
                navigate("/");
            }

        } catch (error) {
            console.log(error);

        } finally{
            dispatch(setLoading(false));
        }

    }
 useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[])

  return (
    <div>
     <Navbar/>
     <div className='flex items-center justify-center max-w-2xl mx-auto'>
                <form onSubmit={submitHandler}  className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Box maxWidth="250px">
		<TextField.Root size="2" type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler} placeholder="Search the docs…" />
	</Box>
                        

                    </div>

                    
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Box maxWidth="250px">
		<TextField.Root size="2" type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler} placeholder="Search the docs…" />
	</Box>
                       
                    </div>

                    <div className='flex items-center justify-between'>
                        
                        
                    </div>
                    {
                            loading ? <Button className='w-full my-4'> <Spinner className='mr-2 h-4 w-4 animate-spin' /> Please wait.. </Button>  :  <Button type="submit" className="w-full my-4 bg-black text-white">Login</Button>
                            }
                   
                    <span className='text-sm  justify-between m-2  '>Already have an account? <Link href="/signup" className='text-red-700'>Signup</Link></span>
                </form>
            </div>
    </div>
  )
}

export default Login;
