import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UsuarioContext } from '../UsuarioContext';


const SignInDialog = ({ open, onClose }) => {
  const {setUser} = useContext(UsuarioContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSignIn = () => {
    setUser(username);
    setEmail('')
    setUsername('');
    setPassword('');
    setPasswordConfirm('');
    onClose();
  };

  const handleClose = () => {
    setEmail('')
    setUsername('');
    setPassword('');
    setPasswordConfirm('');
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
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
        <TextField
          margin="dense"
          label="Confirm Password"
          type="password"
          fullWidth
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />

        <Button onClick={handleSignIn} color="primary" variant="contained">
          Sign in
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Cancelar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;