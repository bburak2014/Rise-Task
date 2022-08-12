import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
 import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts({setOpenalert,openalert}) {
 
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={openalert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenalert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Please enter job name!
        </Alert>
      </Collapse>
     
    </Box>
  );
}
