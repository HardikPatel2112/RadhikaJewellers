import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Spinner() {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
    }}
  >
    <CircularProgress />
  </Box>
  )
}

export default Spinner