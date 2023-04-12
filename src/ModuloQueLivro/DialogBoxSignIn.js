import { Password } from "@mui/icons-material";
import { Dialog,TextField } from "@mui/material";
import { useState } from "react";

const DialogBoxSignIn = () => {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [senha,setSenha] = useState('');
  const [senhaConfirm,setSenhaConfirm] = useState('');
  const [error,setError] =useState(false);
  const [userType,setUsertype] = useState(null);

  const handleSubmit = () => {
    if (!(senha === senhaConfirm)){
      setError("Valores de senha não são iguais");
    }
    if (email && username && senha && senha){
      setError("Campos não preenchidos");
    }

    let requestBodyValues = {email,username,senha};
    console.log(requestBodyValues);
  }
  const handleCancel = () => {
    
  }

  return (
        <Dialog open={open}>
            <DialogTitle>Criar uma conta</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            
          />
          <TextField
            margin="dense"
            id="usuario"
            label="Usuario"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            
          />
          <TextField
            margin="dense"
            id="password-main"
            label="Senha"
            type="password"
            fullWidth
            variant="standard"
            value={senhaConfirm}
            onChange={(e)=>{setSenhaConfirm(e.target.value)}}
            
          />
          <TextField
            margin="dense"
            id="password-confirm"
            label="Confirme a senha"
            type="password"
            fullWidth
            variant="standard"
            value={senhaConfirm}
            onChange={(e)=>{setSenhaConfirm(e.target.value)}}
            
          />

        </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleCancel()}>Cancel</Button>
            <Button onClick={()=>handleSubmit()}>Subscribe</Button>
          </DialogActions>
        </Dialog>
    );
    return {error,username,userType}
}
 
export default DialogBoxSignIn;