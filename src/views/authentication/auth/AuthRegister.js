import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import { useRegisterMutation } from 'src/api/authApi';

const AuthRegister = ({ title, subtitle, subtext }) => {

    const [Register] =useRegisterMutation();
    const nevigate=useNavigate();

    const [isLoading,setLoading]=useState(false);
    const handleRegister =async () => {
        setLoading(true);
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const password = document.getElementById('password').value;
         const phoneNumber = document.getElementById('phoneNumber').value;
    
     
     const res=await   Register({name:name,email:email,password:password,phoneNumber:phoneNumber,role:"ADMIN"});
            
     if(res.data?.isSuccess){      
            nevigate("/auth/login");
     }   
     setLoading(false);
    };

    return (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack mb={1}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="2px">Name</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="2px" mt="25px">Email Address</Typography>
                <CustomTextField id="email" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="2px" mt="25px">Password</Typography>
                <CustomTextField id="password" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='phoneNumber' mb="2px" mt="25px">Phone Number</Typography>
                <CustomTextField id="phoneNumber" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} 
             onClick={handleRegister} 
             >
                       {isLoading ? (<CircularProgress color="warning" size={25} />) : "Sign Up"}            
            </Button>
        </Box>
        {subtitle}
    </>
    );
};

export default AuthRegister;
