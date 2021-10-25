import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../components/ui/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
        Order View in React/Next.js 
        </Typography>
        <Link href="/orders" color="secondary">
          Go to the orders page
        </Link>
        <br/>
      </Box>
    </Container>
  );
}
