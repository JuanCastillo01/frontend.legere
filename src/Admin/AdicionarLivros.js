import { Button, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
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
        <Container>
            <Typography 
            variant="h3"
            gutterBottom
            align="center"
            >
                Adicione um novo livro
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleEnvio}>
                <TextField 
                    variant="outlined"
                    label="Nome do Livro" 
                    margin="dense" 
                    required 
                    onChange={(e) => {setNome(e.target.value);}}
                    inputProps={{maxLength:50}}
                />
                <TextField 
                    variant="outlined"
                    label="Autor"
                    margin="dense"
                    required
                    onChange={(e) => {setAutor(e.target.value)}}
                    inputProps={{maxLength:100}}
                />
                <TextField
                    variant="outlined"
                    label="Trecho 1"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setTrecho1(e.target.value)}}
                    inputProps={{maxLength:300}}/>
                <TextField
                    variant="outlined"
                    label="Trecho 2"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setTrecho2(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField
                    variant="outlined"
                    label="Trecho 3"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setTrecho3(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField
                    variant="outlined"
                    label="Dica Facil"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setDica1(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField
                    variant="outlined"
                    label="Dica Media"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setDica2(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField
                    variant="outlined"
                    label="Dica Dificil"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setDica3(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField 
                    variant="outlined" 
                    label="Inicio do resumo " 
                    margin="dense" 
                    required 
                    multiline
                    rows={3} 
                    fullWidth  
                    onChange={(e) => {setResumo1(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField
                    variant="outlined"
                    label="Meio do resumo"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setResumo2(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <TextField
                    variant="outlined"
                    label="Final do resumo"
                    margin="dense"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    onChange={(e) => {setResumo3(e.target.value)}}
                    inputProps={{maxLength:300}}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                >Cria</Button>
            </form> 
        </Container>
    );
}
 
export default AdicionarLivros;