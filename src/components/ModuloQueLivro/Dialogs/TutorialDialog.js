import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react';

const TutorialDialog = ({open,onClose}) => {
let titulo = "Tutorial";
const tutorial = 
`Sirvo o vinhozinho e cortar o queijinho
Ela vem e me fala:
Eu não comer esse queijo porque engorda 
Eu to na casa dela
Ela comprou o queijo e não vou comer 
E eu respirei fundo
Engoli de novo
Porque era para ser a porra do dia perfeito 
Ai fui preguntar pra ela 
O que que esta acontecendo amor 
E ela olho pra min e falou o seguinte:
É que meu ex já fez td isso 
E você nunca vai fazer igual a ELE
*Tosse*
Como que você fez isso comigo 
Eu não mereço isso 
EU QUERO QUE VOCE MORRA 
VA PRO INFERNO SUA VAGABUNDA 
E SEU EX NAMORADO 
SEU FILHO DA PUTA 
Eu não nasci para sofre 
Eu nasci para ser feliz 
E a partir de agora vou tratar elas que nem bosta
Nunca mais vou sofrer 
Nunca mais 
Tomei uma decisão"`;

return (
    <>
      <Dialog fullWidth open={open} onClose={onClose}>
        <DialogTitle>{titulo}</DialogTitle>
        <DialogContent>
          <Typography align='center' variant='p'>
            {tutorial}
          </Typography>
        </DialogContent>
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          style={{ backgroundColor: 'green', color: 'white', margin: '1rem' }}
        >
          Entendido
        </Button>
      </Dialog>
    </>
  );
};

export default TutorialDialog;