import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, ButtonGroup, Button } from '@mui/material';
import LoginDialog from './LoginDialog';

const ResultDialog = ({ title: titulo, bodyText: Mensagem, number: tentativas, nomeLivro, open, onClose, handleDialogOpenSignIn, handleDialogOpenLogin }) => {
  return (
    <>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{titulo}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          {Mensagem}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {tentativas}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {nomeLivro}
        </Typography>
      </DialogContent>
      <DialogActions>
            <ButtonGroup>
                <Button size="large" variant="outlined" onClick={handleDialogOpenSignIn}>Sign In</Button>
                <Button size="large" variant="outlined" onClick={handleDialogOpenLogin}>Login</Button>
            </ButtonGroup>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default ResultDialog;