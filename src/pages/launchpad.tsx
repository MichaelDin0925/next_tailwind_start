import Grid  from '@mui/material/Grid'; 
import WorkshopCard from '@/components/WorkshopCard';
import Typography from '@mui/material/Typography';
import MainLayout from "../layout/MainLayout";
import Box from '@mui/material/Box';
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';

const Launchpad: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;

    // Create a ResizeObserver instance
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    // Observe the element for resize events
    if (element) {
      resizeObserver.observe(element);
    }

    // Cleanup function to stop observing the element
    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, []);

  
  return (
    <MainLayout>
      <Grid container sx={{height: '100%', overflow: 'hidden'}}>
          <Grid item xs={12} md={6} sx={{
                  // backgroundImage: 'url(/images/background/backgroundimg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
              style={{height: '100%'}}
              ref={boxRef}>
                <Image
                  src="/images/background/backgroundimg.png" alt="logo_h" width={dimensions.width} height={dimensions.height}
                  style={{height: dimensions.height+'px', width: dimensions.width+'px'}}
                />
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ alignItems: 'top', backgroundColor: '#fff'}}>
              <div style={{ height:'17%', width:'100%'}}></div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: '4rem', height: '65%'}}>
                <div>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/icons/logo_h.png" alt="logo_h" width={32} height={32} />
                    <Box sx={{ marginLeft: 1 }}>
                      <Typography  variant="h4" component="div" sx={{fontWeight: 'bold' }}>
                        Studio
                      </Typography>
                    </Box>
                  </Box>
                  <Typography gutterBottom component="div" color="text.secondary" sx={{ fontSize: '1rem', paddingTop: 2, paddingBottom: 5}}>
                    Choose one to create in Studio
                  </Typography>
                </div>
                <WorkshopCard type={1} /> <br/>
                <WorkshopCard type={2} />
              </div>
          </Grid>
      </ Grid>
    </MainLayout>
  )
}

export default Launchpad;