import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LinearWithValueLabel from './LinearWithValueLabel';

// Define the type for props
interface ImgNftCardProps {
  status?: string;
  imgNum?: string;
}

// Functional component with typed props
const ImgNftCard: React.FC<ImgNftCardProps> = ({ status, imgNum }) => {

  let reminderContent;
  let progressContent;

  if (status == "minted") {
    reminderContent = (
      <>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '0.9rem', color: '#989898' }}>
          reminder
        </Typography>
        <Typography gutterBottom component="div" sx={{ fontSize: '0.9rem', color: '#989898' }}>
          2d:3h:32m:1s
        </Typography>
      </>
    );
  } else {
    reminderContent = (
      <>
        <span style={{ display: 'flex', alignItems: 'center', color: '#45B450' }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: '#45B450',
              borderRadius: '50%',
              marginRight: '8px', 
            }}
          />
          {"Live"}
        </span>
        <Typography gutterBottom component="div" sx={{ fontSize: '0.9rem', color: '#989898' }}>
          Ends: 2 Aug
        </Typography>
      </>
    );

    progressContent = (
      <>
        <LinearWithValueLabel />
        <Typography gutterBottom component="div" sx={{ fontSize: '0.9rem', color: '#45B450' }}>
          minted
        </Typography>
      </>
    );
  }

  return (
    <Card sx={{ maxWidth: '25rem', height: '30rem', borderRadius: 3, }}>
      <CardMedia
        component="img"
        alt="NFT Image"
        height="200"
        image={`/images/nft_imgs/img${imgNum}.png`}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            CyberPunk
          </Typography>
          <IconButton>
            <StarBorderIcon sx={{ fontSize: 24, color: 'grey' }} />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {reminderContent}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem', fontWeight: "bold" }}>
            13.24 APT
          </Typography>
          <Typography gutterBottom component="div" sx={{ fontSize: '1rem', fontWeight: "bold" }}>
            5.8k
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '0.9rem', color: '#989898' }}>
            PRICE
          </Typography>
          <Typography gutterBottom component="div" sx={{ fontSize: '0.9rem', color: '#989898' }}>
            ITEMS
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
         {progressContent}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ImgNftCard;
