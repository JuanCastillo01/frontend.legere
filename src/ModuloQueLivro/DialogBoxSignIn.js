import { Password } from "@mui/icons-material";
import { Alert, Button, Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Link,Snackbar,TextField } from "@mui/material";
import { useState } from "react";

const DialogBoxSignIn = () => {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [senha,setSenha] = useState('');
  const [senhaConfirm,setSenhaConfirm] = useState('');
  const [error,setError] =useState(false);
  const [userType,setUsertype] = useState(null);
  const [dialogState,setDialogState] = useState(true);

  const handleSubmit = () => {
    if (!(senha === senhaConfirm)){
      setError("Valores de senha não são iguais");
      setSenha('');
      setSenhaConfirm('');
      return
    }
    if (!email || !username || !senha || !senhaConfirm){
      setError("Campos não preenchidos");
      return
    }
    if (username!=="juan"){
      setError("Usuario invalido")
      return
    }
    if("consulta invalida" === "consulta"){
      setError("Email ja utilizado")
      return
    }

    let requestBodyValues = {email,username,senha};
    console.log(requestBodyValues);

    setDialogState(false);

  }
  const handleCancel = () => {
    setEmail('');
    setUsername('');
    setSenha('');
    setSenhaConfirm('');
    setDialogState(false);
  }

  return (
        <Dialog open={dialogState} >
            <DialogTitle>Criar uma conta</DialogTitle>
        <DialogContent>
        <TextField
            autoComplete="off"
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            
          />
          <TextField
            margin="dense"
            id="usuario"
            label="Usuario"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            
          />
          <TextField
            margin="dense"
            id="password-main"
            label="Senha"
            type="password"
            fullWidth
            variant="outlined"
            value={senha}
            onChange={(e)=>{setSenha(e.target.value)}}
            
          />
          <TextField
            margin="dense"
            id="password-confirm"
            label="Confirme a senha"
            type="password"
            fullWidth
            variant="outlined"
            value={senhaConfirm}
            onChange={(e)=>{setSenhaConfirm(e.target.value)}}
            
          />

        </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={()=>handleCancel()}>Cancel</Button>
            <Button variant="contained" onClick={()=>handleSubmit()}>Criar</Button>
          </DialogActions>
          {error && (<Alert severity="error" variant="filled">{error}</Alert>
          )}
        </Dialog>
    );
  }
 
export default DialogBoxSignIn;