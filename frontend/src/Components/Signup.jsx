import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Label } from '@radix-ui/themes/components/context-menu';
import { Box, Button, Link, Spinner, TextField } from '@radix-ui/themes';
import { useNavigate } from 'react-router';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant.js';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/authSlice.js';

const Signup = () => {
    const navigate = useNavigate();
    const {loading, user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            dispatch(setLoading(true));
    
            const res = await axios.post(`${USER_API_END_POINT}/register`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
    
            if (res.data.success) {
                navigate("/login");
            }
    
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
        } finally {
            dispatch(setLoading(false));
        }
    };
    
 useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[])

  return (
    <div>
     <Navbar/>
     <div className='flex items-center justify-center max-w-2xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>SignUp</h1>

                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Box maxWidth="250px">
		<TextField.Root size="2" type='text' value={input.fullname} name="fullname" onChange={changeEventHandler} placeholder="Enter name" />
	</Box>
                       
                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Box maxWidth="250px">
		<TextField.Root size="2" type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler} placeholder="Enter e-mail" />
	</Box>
                       

                    </div>

                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Box maxWidth="250px">
		<TextField.Root size="2" type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler} placeholder="Enter phoneNumber" />
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
                            loading ? <Button className='w-full my-4'> <Spinner className='mr-2 h-4 w-4 animate-spin' /> Please wait.. </Button>  :  <Button type="submit" className="w-full my-4 bg-black text-white hover:bg-red-600  ">SignUp</Button>
                            }
                   
                    <span className='text-sm  justify-between m-2  '>Already have an account? <Link href="/login" className='text-red-700'>Login</Link></span>
                </form>
            </div>
    </div>
  )
}

export default Signup;
