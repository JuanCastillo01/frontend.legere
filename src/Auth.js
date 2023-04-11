import { Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
const Auth = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState(null);
    
    return (<Container >
        <Paper className="logon"> 
        <form action="" className="singin">
            
            <TextField label="Usuario"/>
            <TextField label="Senha"/>
        </form>
        </Paper>
    </Container>);
}
 
export default Auth;