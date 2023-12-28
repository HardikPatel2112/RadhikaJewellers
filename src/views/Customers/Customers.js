import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import { useCustomersQuery, useDeleteCustomerMutation } from 'src/api/customersApi';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { useDispatch, useSelector } from 'react-redux';
import { SetCustomers } from 'src/Redux/slice/CustomerSlice';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import BasicModal from 'src/components/Model';

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
     // cell: (row) => row['address'],
      sortable: true,
    },
    {
      name: 'Contact',
      selector: 'phone',
      cell: (row) => row['phone'],
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => <CustomDeleteButton row={row} />,
    },
  ];
  const CustomDeleteButton = ({ row }) => (
      <DeleteForeverOutlinedIcon onClick={() => handleDelete(row.id)} />    
  );

  

  const dispatch=useDispatch();

  const customers= useSelector((state) => state.customerStore.customers ?? [])
  const { data, isLoading } = useCustomersQuery(null);


  const [DeleteCustomer] = useDeleteCustomerMutation();
  const handleDelete = async (id) => {
    await DeleteCustomer(id);
    dispatch(SetCustomers(customers.filter(x=>x.id != id)));  
  };

  useEffect(() => {
    if (!isLoading && data) {    
      dispatch(SetCustomers(data));  
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
    <BasicModal/>
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
