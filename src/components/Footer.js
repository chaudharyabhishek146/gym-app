import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import { brown} from '@mui/material/colors';


const Footer = () => (
  <Box mt="1px" sx={{
     
    backgroundColor: brown[400],
    
  }}>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" p="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    </Box>
);

export default Footer;
