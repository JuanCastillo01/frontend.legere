import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

const DialogBoxLogIn = () => {
    const [username,setUsername] = useState('');
    const [senha,setSenha] = useState('');
    const [error,setError] = useState('');

    const [dialogState,setDialogState] = useState(true);
    const handleCancel = () => {
        setUsername('');
        setSenha('');
        setDialogState(false);
    }
    const handleSubmit = () => {
        let requestBodyValues = {username,senha};
        console.log(requestBodyValues);
        setDialogState(false);
    }
    return (
    <Dialog open={dialogState}>
        <DialogTitle>
            Logar na conta
        </DialogTitle>
        <DialogContent>
            <TextField fullWidth label="Usuario" id="usuario-input" margin="dense" variant="outlined" value={username} onChange={(e)=>{setUsername(e.target.value);}} />
            <TextField fullWidth label="Senha" id="senha-input" margin="dense"  variant="outlined" type="password" value={senha} onChange={(e)=>{setSenha(e.target.value);}}/>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={()=>handleCancel()}>Cancel</Button>
            <Button variant="contained" onClick={()=>handleSubmit()}>Entrar</Button>            
        </DialogActions>
        { error && (<Alert severity="error" variant="filled"></Alert>)}
    </Dialog>);
}
 
export default DialogBoxLogIn;
