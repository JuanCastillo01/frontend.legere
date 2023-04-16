import { useContext, useEffect, useState } from "react";
import {Grid,Button,Paper, Typography, ButtonGroup, Tooltip} from "@mui/material";


import {UsuarioContext} from "../UsuarioContext"
import SignInDialog from "./SignInDialog";
import LoginDialog from "./LoginDialog";
import GuessField from "./GuessField";
import TutorialDialog from "./TutorialDialog";
import ResultDialog from "./ResultDialog";


const ModuloQueLivro = () => {
    const textoDialogVitoria = { "titulo": "PARABENS ", "bodyText":"Paarnes vc venceu"};
    const textoDialogDerrota = { "titulo": "Perdeu babaca ", "bodyText":"ERRADO FDP"};

    const {user,setUser} = useContext(UsuarioContext);

    const [tutorialDialog,setTutorialDialog] = useState(true);
    const [dialogOpenLogin, setDialogOpenLogin] = useState(false);
    const [dialogOpenSignIn, setDialogOpenSignIn] = useState(false);
    const [dialogOpenResult,setDialogResult] = useState(false);

    const [tentativas,setTentativas] = useState(3);
    const [livroAtual,setLivroAtual] = useState(null);

    const [isPlaying, setPlaying] = useState(true);
    const [hasWon,setWon] = useState(false);


    const handleOpenTutorialDialog = () => {
        setTutorialDialog(true);
      };
      const handleDialogOpenLogin = () => {
        setDialogOpenLogin(true);
        setDialogOpenSignIn(false);
      };
      
      const handleDialogOpenSignIn = () => {
          setDialogOpenSignIn(true);
          setDialogOpenLogin(false);
        };
    const handleCloseTutorialDialog = () => {
        setTutorialDialog(false);
      };

  
    const handleDialogCloseLogin = () => {
      setDialogOpenLogin(false);
    };
    
    
      const handleDialogCloseSignIn = () => {
        setDialogOpenSignIn(false);
      };

      
      const handleDialogCloseResult = () => {
        setDialogResult(false);
      };

      const handleLogOut = () => {
        setUser(null);
      };

    
      const handleTentativa = (nomeTentativa,nomeCorreto) => {

        if(nomeTentativa===nomeCorreto){
            setPlaying(false);
            setWon(true);
            setDialogResult(true)
        }else{
            setTentativas(prevState => prevState - 1);
        }
      }

      useEffect(()=>{
        if(tentativas===0){
            setPlaying(false);
            setWon(false);
            setDialogResult(true);
        }

      },[tentativas])

    return (
    <>
    <h1>{user}</h1>
    <TutorialDialog open={tutorialDialog} onClose={handleCloseTutorialDialog}/>
    <SignInDialog open={dialogOpenSignIn} onClose={handleDialogCloseSignIn}/>
    <LoginDialog open={dialogOpenLogin} onClose={handleDialogCloseLogin}/>
    
    <ResultDialog open={dialogOpenResult &&  hasWon} title={textoDialogVitoria.titulo} bodyText={textoDialogVitoria.bodyText} handleDialogOpenSignIn={handleDialogOpenSignIn} handleDialogOpenLogin={handleDialogOpenLogin} onClose={handleDialogCloseResult}/> 

    <ResultDialog open={dialogOpenResult && !hasWon} title={textoDialogDerrota.titulo} bodyText={textoDialogDerrota.bodyText} handleDialogOpenSignIn={handleDialogOpenSignIn} handleDialogOpenLogin={handleDialogOpenLogin} onClose={handleDialogCloseResult}/>
    

    <Grid container padding={2} justifyContent="left">
        <Grid item xs={1}>
            <Tooltip title="aaa">
                <Button sx={{borderRadius:10}} size="large" variant="outlined" onClick={handleOpenTutorialDialog} >?</Button>
            </Tooltip>
        </Grid>
        <Grid item xs={2}>
            <ButtonGroup>
            {!user ? <>  
                <Button size="large" variant="outlined" onClick={handleDialogOpenSignIn}>Sign In</Button>
                <Button size="large" variant="outlined" onClick={handleDialogOpenLogin}>Login</Button>
            </>:
                <Button size="large" variant="outlined" onClick={handleLogOut}>Logout</Button>}
            </ButtonGroup>
        </Grid>
            <Grid item xs={1}>
                    <Typography  variant="h4" textAlign="center" >
                        {tentativas}
                    </Typography>
                </Grid> 
    </Grid>


        <Grid container  justifyContent="center" spacing={5} >
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
                    {(tentativas<=2) && <Grid item xs={12} textAlign="left">
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
                    </Grid>}
                    {(tentativas<=1) && <Grid item xs={12} textAlign="left">
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
                    </Grid> }
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
                    {(tentativas<=2) && <Grid item xs={12} textAlign="left">
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
                    </Grid>}
                    {(tentativas<=1) && <Grid item xs={12} textAlign="left">
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
                    </Grid> }
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
                    {(tentativas<=2) && <Grid item xs={12} textAlign="left">
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
                    </Grid>}
                    {(tentativas<=1) && <Grid item xs={12} textAlign="left">
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
                    </Grid> }
                </Paper>
            </Grid>
            <Grid item alignSelf="center" xs={6}>
                <GuessField handleTentativa={handleTentativa} isPlaying={isPlaying}/>
            </Grid>

        </Grid>
    </>
    );
}
 
export default ModuloQueLivro;