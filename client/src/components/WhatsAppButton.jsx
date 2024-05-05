import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5534997267144', '_blank');
  };

  return (
    <Tooltip title="Fale conosco pelo WhatsApp!" placement="left">
      <Fab
        color="primary"
        aria-label="whatsapp"
        onClick={handleClick}
        sx={{
            background: '#25D366',
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;