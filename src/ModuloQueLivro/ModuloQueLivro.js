import { useEffect, useState } from "react";
import { TextField, ToggleButton, Step, Stepper,Button,Tooltip, Box, Container,RadioGroup, Radio, FormControl, FormControlLabel} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';


const ModuloQueLivro = ({user,setUser,userType,setUserType}) => {
    const tutorialButton = "Mulher Mulher é uma desgraça Só fica satisfeita quando estão insatisfeitas Só são plenamente felizes quando estão complementarmente infelizes Só fica feliz quando a gente está tristeNão consegue ficar satisfeita E ontem foi a porra do meu aniversário de namoro E vou contar o que ela fezEu queria que fosse o dia perfeito para ela Paguei spa, reservei a porra do restaurante"
    const [emailToCheck,setEmailToCheck] = useState('');
    const [userToCheck,setUserToCheck] = useState('');
    const [passwordToCheck,setPasswordToCheck] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [formMode,setFormMode] =useState("Login");

    return (
    <div className="modulo-principal-quelivro">
        <Container>
                <Tooltip title={tutorialButton}>
                    <Button size="large" variant="text" on ><HelpIcon/></Button>
                </Tooltip>
                <Box>
                    
                </Box>
        </Container>
    </div>);
}
 
export default ModuloQueLivro;