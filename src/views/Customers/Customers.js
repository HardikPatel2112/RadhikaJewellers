import React, { useEffect, useState } from 'react';
import {
  Box,
  right ,
  
} from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import { useCustomersQuery, useDeleteCustomerMutation, useEditCustomerMutation } from 'src/api/customersApi';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { useDispatch, useSelector } from 'react-redux';
import { SetCustomers } from 'src/Redux/slice/CustomerSlice';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import BasicModal from 'src/components/Model';
import Spinner from 'src/components/Spinner';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Customers() {

  const columns = [
    {
      name: 'Name',
    selector: 'name',
      //cell: (row) => row['name'],
      sortable: true,
    },
    {
      name: 'Address',
     selector: 'address',
   //  cell: (row) => row['address'],
      sortable: true,
    },
    {
      name: 'Contact',
     //selector: 'phone',
      cell: (row) => row['phone'],
    //  sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => <><CustomDeleteButton row={row} /> <CustomEditButton row={row} />   </> ,
    },
  ];
  const CustomDeleteButton = ({ row }) => (
      <DeleteForeverOutlinedIcon onClick={() => handleDelete(row.id)} />    
  );

 

  const dispatch=useDispatch();
  const { data, isLoading } = useCustomersQuery(null);
  const [isModelOpen,setModelStatus]=useState(false);
  const customers= useSelector((state) => state.customerStore.customers ?? [])
  const [DeleteCustomer] = useDeleteCustomerMutation();

  const [customerToEdit,SetcustomerToEdit]=useState(null);


  const handleDelete = async (id) => {
    await DeleteCustomer(id);
    dispatch(SetCustomers(customers.filter(x=>x.id != id)));  
  };
 
  useEffect(() => {
    if (!isLoading && data) {    
      dispatch(SetCustomers(data));  
    }
  }, [data, isLoading,isModelOpen]);

 
  const CustomEditButton = ({ row }) => (
    <ModeEditIcon onClick={() => handleOpenBox(row.id)} > </ModeEditIcon>  
);


const handleOpenBox=(id)=>{
  setModelStatus(!isModelOpen);
  if(id){
    SetcustomerToEdit(customers.find(x=>x.id==id))
  }else{
    SetcustomerToEdit(null);
  }
     
};

  if (isLoading) {
    return  <Spinner/>;
  }

  return (
    <>
       <PersonAddAltIcon onClick={handleOpenBox}></PersonAddAltIcon>
    <BasicModal  isModelOpen={isModelOpen} customerToEdit={customerToEdit} setModelStatus={setModelStatus} />
    
    <DashboardCard title="Customers Contacts"> 
    
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>

        <DataTableExtensions
          filterDigit={0}
          columns={columns}
          print={false}
          data={customers}
          export={false}
        >
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <DataTable pagination highlightOnHover customStyles={tableCustomStyles} />
          )}
        </DataTableExtensions>       
      </Box>
    </DashboardCard></>
  );
}

export default Customers;

const tableCustomStyles = {
  headCells: {
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      paddingLeft: '10px',
      justifyContent: 'left',
      backgroundColor: 'rgb(100 21 255)',
      marginTop:"5px"
    },
  },
  searchBar: {
    style: {
      // Add your custom styles for the search box here
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '8px',
      margin: '8px',
      fontSize: '16px',
    },
  },
};
export { tableCustomStyles };
