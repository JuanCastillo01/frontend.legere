import { Button, Container, Paper, Box, ButtonGroup, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import useFetch from "../../usefetch";
import { Padding } from "@mui/icons-material";
import DialogEditEntry from "./DialogEditEntry";
import { render } from "@testing-library/react";

const ListarLivros = () => {
    
    const deleteEntryUrl = "http://localhost:8080/api/quelivro/";

    const {data:listaItensQueLivro} = useFetch("http://localhost:8080/api/quelivro");

    const [selectedRows, setSelectedRows] = useState(null);
    
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    const [livroAlterar, setLivroAlterar] = useState(null);

    const [alterDialogState,setAlterDialogState]   = useState(false);

    const colunas  = [
        {field:"sequencial", headerName: 'ID' , width:70},
        {field:"nomeLivro", headerName: 'Nome' , width:200},
        {field:"autoria", headerName: 'Autor' , width:200},
        {field:"dicaA", headerName: 'Dica Inicial' , width:500},
        {field:"dicaB", headerName: 'Dica Media' , width:500},
        {field:"dicaC", headerName: 'Dica Final' , width:500},
        {field:"sumarioA", headerName: 'Inicio de resumo' , width:500},
        {field:"sumarioB", headerName: 'Metade do resumo' , width:500},
        {field:"sumarioC", headerName: 'Final do resumo' , width:500},
        {field:"trechoFacil", headerName: 'Trecho Facil' , width:500},
        {field:"trechoMedio", headerName: 'Trecho Medio' , width:500},
        {field:"trechoDificil", headerName: 'Trecho Dificil' , width:500}
    
    ]

    const handleDelete = () => {
        console.log("Delete " + selectedRows);
        const abortCont = new AbortController();

        fetch(deleteEntryUrl.concat(selectedRows), {method:"Delete",headers: { 'Content-Type': 'application/json' } , signal: abortCont.signal})
        .then(res => {
            if (!res.ok) {
            throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        })
        .catch(err => {
            if (err.name === 'AbortError') {
            console.log('fetch aborted')
            } else {
            setIsPending(false);
            setError(err.message);
            }
        })
        return () => abortCont.abort();
        
    }

    const handleAlterar = () => {
        const abortCont = new AbortController();

    const alterar = fetch(`http://localhost:8080/api/quelivro/${selectedRows}`, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) {
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setLivroAlterar(data);
      setAlterDialogState(true);
      setError(null);
      
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setIsPending(false);
        setError(err.message);
      }
    })
    return () => abortCont.abort();

    }

    const handleSelectRow= (ids) =>{
        setSelectedRows(ids);
    }
    

    return (
        <Container >
            {alterDialogState && (<DialogEditEntry/>)}
            <Paper style={{height:500, width: '100%', }}>
            {listaItensQueLivro && 
            
                <DataGrid 
                    rows={listaItensQueLivro}
                    columns={colunas}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    getRowId={(row)=>row.sequencial}
                    scrollbarSize={1}
                    onRowSelectionModelChange={handleSelectRow}
                />}
                <Box padding={2}>
                    <Grid container alignItems="center">
                        <Grid item xs={3}>
                            <Button size="large" variant="contained" onClick={(e)=>{handleDelete();}}>Delete</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button size="large" variant="contained" onClick={handleAlterar}>Alterar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>  
    );
}
 
export default ListarLivros;