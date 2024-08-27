import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid'; 
import Box from '@mui/material/Box';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <Divider sx={{ marginBottom: 2 }} />
      <Grid container >
          <Grid item xs={12} md={4} sx={{paddingLeft: 15, paddingBottom: 20, paddingTop: 5}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/icons/logo_h.png" alt="logo_h" width={45} height={45} />
              <Box sx={{ marginLeft: 1 }}>
                  <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                    Wgmi
                  </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary"  sx={{ maxWidth: '70%', paddingTop: 3 }}>
                The largest NFT marketplace and Runes platform 
                exclusively supporting Aptos Network. Buy, sell, 
                and discover Ordinals and NFTs on Aptos Network.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'left', paddingTop: 2 }}>
              <Image src="/icons/x.png" alt="x.png" width={24} height={24} /> &nbsp;
              <Image src="/icons/telegram.png" alt="telegram.png" width={24} height={24} /> &nbsp;
              <Image src="/icons/discord.png" alt="discord.png" width={24} height={24} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 4 }}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Aptos Labs, Inc. All Rights Reserved.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
    
          </Grid>
          <Grid item xs={12} md={3}> </Grid>
      </ Grid>
    </>
  );
};

export default Footer;