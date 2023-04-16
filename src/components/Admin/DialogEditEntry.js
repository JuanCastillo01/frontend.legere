import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Alert, Button } from "@mui/material";

const DialogEditEntry = () => {
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
    
    const [dialogState,setDialogState] = useState(true);
    const [error,setError] = useState('');
    
    
    return (
        <Dialog open={dialogState}>
        <DialogTitle>
            Logar na conta
        </DialogTitle>
        <DialogContent>
        <form noValidate autoComplete="off" > 
        {//onSubmit={}
        }
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
        </DialogContent>
        <DialogActions>
            <Button variant="contained">Cancel</Button>
            <Button variant="contained">Entrar</Button>            
        </DialogActions>
        {error&& (<Alert severity="error" variant="filled"></Alert>)}
    </Dialog>
    );
} 
export default DialogEditEntry;
