import { Button, Typography, Box, Container, Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState, useEffect } from "react";

const AdicionarLivros = () => {
    const [nome,setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [trecho1,setTrecho1] = useState('');
    const [trecho2,setTrecho2] = useState('');
    const [trecho3,setTrecho3] = useState('');
    const [dica1,setDica1] = useState('');
    const [dica2,setDica2] = useState('');
    const [dica3,setDica3] = useState('');
    const [resumo1,setResumo1] = useState('');
    const [resumo2,setResumo2] = useState('');
    const [resumo3,setResumo3] = useState('');
    const [saveNewObject,setSaveNewObject] = useState();
    const postEntryUrl = "http://localhost:8080/api/quelivro";

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect (()=> {
        const abortCont = new AbortController();
        
        if(nome && autor && trecho1 && trecho2 && trecho3 && resumo1 && resumo2 && resumo3 && dica1 && dica2 && dica3){

            fetch(postEntryUrl, {method:"POST",headers: { 'Content-Type': 'application/json' } , signal: abortCont.signal, body:JSON.stringify(saveNewObject)})
            .then(res => {
              if (!res.ok) {
                throw Error('could not fetch the data for that resource');
              } 
              return res.json();
            })
            .then(data => {
              setIsPending(false);
              setData(data);
              setError(null);
              console.log(data);
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
      }, [saveNewObject]
)


    const handleEnvio = (e) => {
        if(nome && autor && trecho1 && trecho2 && trecho3 && resumo1 && resumo2 && resumo3 && dica1 && dica2 && dica3){
            setSaveNewObject({
                "nomeLivro":nome,
                "autoria":autor,
                "sumarioA":resumo1, "sumarioB":resumo2, "sumarioC":resumo3,
                "dicaA":dica1, "dicaB":dica2, "dicaC":dica3,
                "trechoFacil":trecho1,"trechoMedio":trecho2,"trechoDificil":trecho3
            })
        }
            
        e.preventDefault();

    }

    return (
        <Container className="tela-acionar-livros">
            <Box borderRadius={6} border={3}>
                <Typography
                    variant="h3"
                    align="center"
                >
                    Adicione um novo livro
                </Typography>
            </Box>

            <Box padding={2}>

                <form noValidate autoComplete="off" onSubmit={handleEnvio}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    variant="filled"
                                    label="Nome do Livro" 
                                    margin="dense" 
                                    required 
                                    fullWidth
                                    value={nome}   
                                    onChange={(e) => {setNome(e.target.value);}}
                                    inputProps={{maxLength:50}}
                                    />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField 
                                    variant="filled"
                                    label="Autor" 
                                    margin="dense"
                                    required
                                    fullWidth
                                    value={autor}   
                                    onChange={(e) => {setAutor(e.target.value)}}
                                    inputProps={{maxLength:100}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Trecho 1"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={trecho1}   
                                    onChange={(e) => {setTrecho1(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Trecho 2"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={trecho2}   
                                    onChange={(e) => {setTrecho2(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Trecho 3"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={trecho3}
                                    onChange={(e) => {setTrecho3(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Dica Facil"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={dica1}
                                    onChange={(e) => {setDica1(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Dica Media"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={dica2}
                                    onChange={(e) => {setDica2(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Dica Dificil"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={dica3}
                                    onChange={(e) => {setDica3(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    variant="filled" 
                                    label="Inicio do resumo " 
                                    margin="dense" 
                                    required 
                                    fullWidth
                                    multiline
                                    value={resumo1}
                                    onChange={(e) => {setResumo1(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Meio do resumo"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={resumo2}
                                    onChange={(e) => {setResumo2(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    label="Final do resumo"
                                    margin="dense"
                                    required
                                    fullWidth
                                    multiline
                                    value={resumo3}
                                    onChange={(e) => {setResumo3(e.target.value)}}
                                    inputProps={{maxLength:300}}
                                />
                            </Grid>
                        </Grid>
                            <Button sx={{marginTop:1}} type="submit" variant="contained">Criar</Button>
                </form> 
        
            </Box>

    </Container>
    );
}

export default AdicionarLivros;