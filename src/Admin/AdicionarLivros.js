import { Button, Typography, Box, Container, Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

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

    const handleEnvio = (e) => {
        let saveNewObject = {
            nomeLivro:nome,
            autoria:autor,
            sumarioA:resumo1, sumarioB:resumo2, sumarioC:resumo3,
            dicaA:dica1, dicaB:dica2, dicaC:dica3,
            trechoFacil:trecho1,trechoMedio:trecho2,trechoDificil:trecho3
        }
        e.preventDefault();
        if (nome && autor && trecho1 && trecho2 && trecho3 && dica1 && dica2 && dica3 && trecho1 && trecho2 && trecho3 )
            console.log(saveNewObject)
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