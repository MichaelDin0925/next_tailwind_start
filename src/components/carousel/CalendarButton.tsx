import React from 'react';
import { Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { styled } from '@mui/system';

// Optional: Customize the button using styled
const CustomButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(143, 140, 140, 0.8)',
  },
  padding: '10px',
  borderRadius: '7px',
  marginRight: '40px'
});

const CalendarButton: React.FC = () => {
  return (
    <CustomButton variant="contained">
      <CalendarTodayIcon/>
    </CustomButton>
  );
};

export default CalendarButton;