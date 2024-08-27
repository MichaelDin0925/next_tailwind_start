import React from 'react';
import styles from './RoundedTextField.module.css'; // Import the CSS module
import { Box } from '@mui/material';

// Define the props type
interface RoundedTextFieldProps {
  text: string;
}

const RoundedTextField: React.FC<RoundedTextFieldProps> = ({ text }) => {
  return (
    <div className={styles.roundedTextField}>
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
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: '#fff' }}>2d:3h:32m:1s</span>
    </div>
  );
};

export default RoundedTextField;