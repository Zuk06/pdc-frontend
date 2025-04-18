import React from 'react'
import { Box, Container, Typography } from '@mui/material'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          PDC - Gestion de Documents
        </Typography>
      </Container>
    </Box>
  )
}

export default App 