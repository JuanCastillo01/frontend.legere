import React, { useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, ButtonGroup, Button } from '@mui/material';

import { useHistory } from 'react-router-dom';

import { UsuarioContext } from '../contexts/UsuarioContext';
import { GameInfoContext } from '../contexts/GameInfoContext';

const ResultDialog = ({ title: titulo, bodyText: Mensagem, number: tentativas, nomeLivro, open, onClose, handleDialogOpenSignIn, handleDialogOpenLogin }) => {
  const {user} = useContext(UsuarioContext);

  const {setQueLivroResultTentativas} = useContext(GameInfoContext);

  const history = useHistory();


  const handleEndgame= () =>{
      setQueLivroResultTentativas(tentativas);
  }

  const handleRedirectOnClick = () => {
    history.push('/queLivro/resultados');
  }

  return (
    <>
    <Dialog open={open} onClose={onClose} onPointerEnter={handleEndgame}>
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
                {!user && <>
                  <Button size="large" variant="outlined" onClick={handleDialogOpenSignIn}>Sign In</Button>
                  <Button size="large" variant="outlined" onClick={handleDialogOpenLogin}>Login</Button>
                </>  
              }
                  <Button disabled={!user} size="large" variant="contained" onClick={handleRedirectOnClick} >Continuar </Button>
            </ButtonGroup>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default ResultDialog;