import { Button, Grid, Slider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PostFunction from '../requestModels/PostFunction'

const FormularioOpiniao = () => {
  const [satisfacao, setSatisfacao] = useState(3);
  const [cometario, setCometario] = useState('');
  const [sugestao, setSugestao] = useState('');
  
  const handleSliderChange = (event, value) => {
    setSatisfacao(value);
  };
  
  const handleComentarioChange = (event) => {
    setCometario(event.target.value);
  };
  
  const handleSugestaoChange = (event) => {
    setSugestao(event.target.value);
  };
  
  const handleEnvio = (event) => {
    const instanciaFormulario = {"cometario":cometario,"satisfacao":satisfacao,"recomendacao":sugestao}
    event.preventDefault();
    setSatisfacao(3);
    setCometario('');
    setSugestao('');

    const abortCont = new AbortController();

    fetch("http://localhost:8080/api/aval", {method:"POST", signal: abortCont.signal, headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(instanciaFormulario)})
    .then(res => {
      if (!res.ok) {
        throw Error('Não se pude submitir as inofrmçõess');
      } 
      return res.json();
    }).catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      }
    })
    return () => abortCont.abort();


  };
  
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleEnvio} className="opinioes">
        <Grid container justifyContent="center">
            <Grid item xs={12} alignContent="center" padding={3} >
                <Typography textAlign="center" variant='h4'>Sua opinião importa</Typography>
            </Grid>

            <Grid item xs={10} alignContent="center" padding={3} >
                <Typography>Numa escala de 0 a 5?</Typography>
                <Slider
                size="small"
                value={satisfacao}
                min={1}
                max={5}
                step={1}
                onChange={handleSliderChange}
                marks
                valueLabelDisplay="auto"
                />
            </Grid>
            <Grid item xs={11} alignContent="center" padding={3}>
                <TextField
                label="Cometarios e Opiniões"
                multiline
                rows={3}
                value={cometario}
                inputProps={{ maxLength: 255 }}
                onChange={handleComentarioChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={11} alignContent="center" padding={3}>
                <TextField
                label="Que livro deveriamos adicionar"
                value={sugestao}
                onChange={handleSugestaoChange}
                inputProps={{ maxLength: 255 }}
                fullWidth
                />
            </Grid>
            <Grid item xs={5} alignContent="center" padding={3}>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </Grid>
      </form>
    </>
  );
}

export default FormularioOpiniao;