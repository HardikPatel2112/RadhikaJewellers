import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Stack} from '@mui/material';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { useDispatch } from 'react-redux';
import { AddCustomers } from 'src/Redux/slice/CustomerSlice';
import { useAddCustomerMutation } from 'src/api/customersApi';




function  AddCustomer(props) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const[AddCustomer]= useAddCustomerMutation();
  const dispatch = useDispatch();

  const handleSubmit =async (e) => {
    setIsSubmitting(true);
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const newCustomer = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address')
    };  
    await AddCustomer(newCustomer);
    dispatch(AddCustomers(newCustomer)); 
    setIsSubmitting(false); 
    props.handleClose();
  };


  return (
    <Box >
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <Stack mb={5}>
          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
          <CustomTextField name="name" id="name" variant="outlined" fullWidth inputProps={{ name:"name"}}   />

          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='phone' mb="5px" mt="25px">Phone</Typography>
          <CustomTextField name="phone" id="phone" variant="outlined" fullWidth inputProps={{ name:"phone"}}  />

          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='address' mb="5px" mt="25px">Address</Typography>
          <CustomTextField name="address" id="address" variant="outlined" fullWidth inputProps={{ name:"address"}}  />
        </Stack>
        <Button color="primary" variant="contained" size="large" fullWidth type="submit">
         {isSubmitting? "Submiting ..." : "Submit"}   
        </Button>
      </form>
    </Box>
  );
};

export default AddCustomer;
