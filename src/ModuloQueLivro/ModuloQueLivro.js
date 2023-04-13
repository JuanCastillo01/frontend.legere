import { useEffect, useState } from "react";
import {Grid, TextField, ToggleButton, Step, Stepper,Button,Tooltip, Box, Container,RadioGroup, Radio, FormControl, FormControlLabel, Paper, Typography, Card} from "@mui/material";
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
    <Grid container  justifyContent="center" spacing={5} >
        
                    {/* <Tooltip title={tutorialButton}>
                        <Button size="large" variant="text" ><HelpIcon/></Button>
                    </Tooltip> */}
                
                <Grid item xs={4}>
                    <Paper elevation={6}>
                        <Typography  variant="h4" textAlign="center" >
                            Resumo
                        </Typography>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid> 
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={6}>
                        <Typography  variant="h4" textAlign="center" >
                            Trechos
                        </Typography>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid> 
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={6}>
                        <Typography  variant="h4" textAlign="center" >
                            Curiosidades
                        </Typography>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="left">
                            <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                                Mulher 
                                Mulher é uma desgraça
                                Só fica satisfeita quando estão insatisfeitas 
                                Só são plenamente felizes quando estão complementarmente infelizes 
                                Só fica feliz quando a gente está triste
                                Não consegue ficar satisfeita 
                                E ontem foi a porra do meu aniversário de namoro 
                                E vou contar o que ela fez
                                Eu queria que fosse o dia perfeito para ela 
                                Paguei spa, reservei a porra do restaurante 
                            </Typography>
                        </Grid> 
                    </Paper>
                </Grid>
            
    </Grid>
    
    );
}
 
export default ModuloQueLivro;