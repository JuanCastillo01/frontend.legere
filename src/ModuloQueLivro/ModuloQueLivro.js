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
    const [queLivroObject,setQueLivroObject] = useState([]);

    
    return (
    <div className="modulo-principal-quelivro">
        <Container>
                <Tooltip title={tutorialButton}>
                    <Button size="large" variant="text" ><HelpIcon/></Button>
                </Tooltip>
                <Box>
                    <ol className="lista">
                        <li>
                            lista
                        </li>
                        {queLivroObject && queLivroObject.map((livro)=>(
                            <div key={livro.sequencial}>{livro.nomeLivro}</div>
                        ))}
                    </ol>
                </Box>
        </Container>
    </div>);
}
 
export default ModuloQueLivro;