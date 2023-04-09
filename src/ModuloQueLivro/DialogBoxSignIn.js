import { Dialog } from "@mui/material";

const DialogBoxSignIn = () => {
  const handleSubmit = () => {
    
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
          />
          <TextField
            margin="dense"
            id="usuario"
            label="Usuario"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password-main"
            label="Senha"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password-confirm"
            label="Confirme a senha"
            type="password"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleCancel()}>Cancel</Button>
          <Button onClick={()=>handleSubmit()}>Subscribe</Button>
        </DialogActions>
        </Dialog>
    );
}
 
export default DialogBoxSignIn;