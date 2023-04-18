import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GameInfoContext } from '../components/contexts/GameInfoContext';

const GuessField = ({handleTentativa, isPlaying}) => {
  const {queLivroDataObject,setQueLivroListaTentativas} = useContext(GameInfoContext);

  const [nomeTentativa, setNometentativa] = useState(null);
  const [listaTentativas,setListaTentativas] = useState([]);

  
  const handleOnChange = (valor,novoValor) => {
    setNometentativa(novoValor);
  };

  const handleSubmitField = () =>{
    if(nomeTentativa!==null){
      handleTentativa(nomeTentativa, queLivroDataObject.nomeLivro);
      if(nomeTentativa === queLivroDataObject.nomeLivro){
        setListaTentativas(prevLista => [...prevLista, [nomeTentativa] ]);
      } else{
        setListaTentativas(prevLista => [...prevLista, [nomeTentativa] ]);
      }
    }
  }

  useEffect(()=>{setQueLivroListaTentativas(listaTentativas)},[listaTentativas])

  return (
    <>
  {isPlaying && 
  <Grid container alignSelf="inherit" > 
    <Grid item xs={8} >
      <Autocomplete
        options={['Otelo', 'Dom Casmurro', 'Grande Sertão Veredas']}
        onChange={handleOnChange}
        value={nomeTentativa}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Selecione uma opção"
            variant="outlined"
            fullWidth
          />
        )}
        />
    </Grid>
    <Grid item alignSelf="center" textAlign="center" xs={4}>
      <Button size="large" variant="contained" onClick={handleSubmitField}>Buscar</Button>
    </Grid> 
  </Grid>
  }
    </>
  );
};

export default GuessField;