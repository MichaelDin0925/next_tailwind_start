import React from "react";
import LandLayout from "../layout/LandLayout";
import Carousel from "../views/carousel";
import SwitchSelector from '../components/switchselector';
import ImgNftCard from '../components/nftcard/ImgNftCard';
import Grid  from '@mui/material/Grid'; 
import Link from "@/components/Link";

const Index: React.FC = () => {
  return (
    <LandLayout>
      <div className="px-12 py-9 bg-white">
        <Carousel />
        
        <div className="mt-8">
          <div className="mb-8">
            <div className="mb-4">
              <span className="font-bold text-xl ">Live & Upcoming</span> &nbsp;&nbsp; <span className="font-text-lg text-gray-400 font-bold">Past</span>
            </div>

            <div>
              <div
                style={{
                  height: 30,
                  width: 300
                }}
              >
                <SwitchSelector
                  initialSelectedIndex={1}
                  selectedBackgroundColor="#fff"
                  fontColor="#989898"
                  selectedFontColor="#000"
                  onChange={() => {}}
                  options={[
                    {
                      label: 'All',
                      value: true
                    },
                    {
                      label: 'Launchpad',
                      value: 20
                    },
                    {
                      label: 'Open',
                      value: '30'
                    }
                  ]}
                />
              </div>

            </div>
          </div>
          
          <div className='nft-list-body' >
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6} md={3}>
                <Link href="/">
                  <ImgNftCard status='minted' imgNum="1"/>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard imgNum="2"/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard status='minted' imgNum="3" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard imgNum="4" />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ pt: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard status='minted' imgNum="5" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard imgNum="6"/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard imgNum="7" status='minted' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ImgNftCard imgNum="8" />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </LandLayout>
  );
};

export default Index;
