import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Stack} from '@mui/material';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { useDispatch } from 'react-redux';
import { AddCustomers, UpdateCustomer } from 'src/Redux/slice/CustomerSlice';
import { useAddCustomerMutation, useEditCustomerMutation } from 'src/api/customersApi';




function  AddCustomer(props) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [AddCustomer]= useAddCustomerMutation();
  const [EditCustomer]=useEditCustomerMutation();
  const dispatch = useDispatch();

  const handleSubmit =async (e) => {
    setIsSubmitting(true);
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const cust = {
      id:  formData.get('id'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address')
    };  

    if(cust.id){
      updateCustomer(cust)
  
    }else{
      cust.id=0;
      await AddCustomer(cust);
      dispatch(AddCustomers(cust)); 
    }

    setIsSubmitting(false); 
    props.handleClose();
  };

  const updateCustomer = async (customer) => {
    await EditCustomer(customer); 
    dispatch(UpdateCustomer(customer));  
    
  }; 


  return (
    <Box >
      <h2> {props.customerToEdit? "Edit Customer" : "Add New Customer"}</h2>
      <form onSubmit={handleSubmit}>
        <Stack mb={5}>
         <CustomTextField style={{display:"none"}}  name="id" id="id" variant="outlined" fullWidth inputProps={{ name:"id"}} defaultValue={props.customerToEdit?.id}  />
    
          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
          <CustomTextField name="name" id="name" variant="outlined" fullWidth inputProps={{ name:"name"}} defaultValue={props.customerToEdit?.name}  />

          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='phone' mb="5px" mt="25px">Phone</Typography>
          <CustomTextField name="phone" id="phone" variant="outlined" fullWidth inputProps={{ name:"phone"}} defaultValue={props.customerToEdit?.phone} />

          <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='address' mb="5px" mt="25px">Address</Typography>
          <CustomTextField name="address" id="address" variant="outlined" fullWidth inputProps={{ name:"address"}} defaultValue={props.customerToEdit?.address} />
        </Stack>
        <Button color="primary" variant="contained" size="large" fullWidth type="submit">
         {isSubmitting? "Submiting ..." : "Submit"}   
        </Button>
      </form>
    </Box>
  );
};

export default AddCustomer;
