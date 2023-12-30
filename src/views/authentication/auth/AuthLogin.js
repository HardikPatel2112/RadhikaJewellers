import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
    CircularProgress
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useLoginMutation } from 'src/api/authApi';


const AuthLogin = ({ title, subtitle, subtext }) => {

    const [Login] =useLoginMutation();
    const nevigate=useNavigate();

    const [isLoading,setLoading]=useState(false);
    const handleSignIn =async () => {
        setLoading(true);
         const username = document.getElementById('username').value;
         const password = document.getElementById('password').value;
     
     const res=await   Login({username:username,password:password});
            
     if(res.data?.isSuccess){
        let token =res.data?.result.token;
        localStorage.setItem("token",token);       
        nevigate("/");
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

            <Stack>
            <Box>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                <CustomTextField id="username" variant="outlined" fullWidth />
            </Box>
            <Box mt="25px">
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                <CustomTextField id="password" type="password" variant="outlined" fullWidth />
            </Box>
            <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remeber this Device"
                    />
                </FormGroup>
                <Typography
                    component={Link}
                    to="/"
                    fontWeight="500"
                    sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                    }}
                >
                    Forgot Password ?
                </Typography>
            </Stack>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
               
                    onClick={handleSignIn} // Call handleSignIn on button click
                    type="button"
                >
                {isLoading ? (<CircularProgress color="warning" size={25} />) : " Sign In"}   
                </Button>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthLogin;
