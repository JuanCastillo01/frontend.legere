import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const GuessField = ({handleTentativa, isPlaying}) => {
  const [nomeTentativa, setNometentativa] = useState(null);
  const [listaTentativas,setListaTentativas] = useState([]);

  let correctValue = "Otelo";


  const handleOnChange = (valor,novoValor) => {
    setNometentativa(novoValor);
    
  };
  
  return (
    <>
  {isPlaying && 
  <Grid container alignSelf="inherit" > 
    <Grid item xs={8} >
      <Autocomplete
        options={['Otelo', 'Dom casmurro', 'Grande Sertão Veredas']}
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
      <Button size="large" variant="contained" onClick={()=>{
        if(nomeTentativa!==null){
          handleTentativa(nomeTentativa, correctValue);
          if(nomeTentativa === correctValue){
            setListaTentativas(prevLista => [...prevLista, [nomeTentativa,"- Correto "] ]);
          } else{
            setListaTentativas(prevLista => [...prevLista, [nomeTentativa,"- Errado"] ]);
          }
        }
      }}>Buscar</Button>
    </Grid>

    
  </Grid>
  }
  <Grid item alignSelf="center" textAlign="center" xs={12}>
      {listaTentativas.map((tentativa,index) => <li key={index}>{tentativa}</li>)}
    </Grid>
    </>
  );
};

export default GuessField;