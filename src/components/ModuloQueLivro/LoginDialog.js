import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UsuarioContext } from '../UsuarioContext';


const LoginDialog = ({ open, onClose }) => {
  const {setUser} = useContext(UsuarioContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    setUser(username);
    setUsername('');
    setPassword('');
    onClose();
  };
  const handleClose = () => {
    setUsername('');
    setPassword('');
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
        <Button onClick={handleLogin} color="primary" variant="contained">
          Login
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Cancelar  
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;