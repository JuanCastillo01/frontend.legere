import { useContext, useEffect, useState } from "react";
import {Grid,Button,Paper, Typography, ButtonGroup, Tooltip} from "@mui/material";


import {UsuarioContext} from "../contexts/UsuarioContext"
import {GameInfoContext} from "../contexts/GameInfoContext"
import SignInDialog from "./Dialogs/SignInDialog";
import LoginDialog from "./Dialogs/LoginDialog";
import GuessField from "./GuessField";
import TutorialDialog from "./Dialogs/TutorialDialog";
import ResultDialog from "./Dialogs/ResultDialog";
import { useHistory } from "react-router-dom";
import HelpIcon from '@mui/icons-material/Help';

const ModuloQueLivro = () => {
    const textoDialogVitoria = { "titulo": "Fenomenal ", "bodyText":"Voce conseguiu!!! \nContinue para:\n -> Aprender mais sobre o livro\n -> Compartilhar seu resultado \n -> Nos mandar seu feedback"};

    const textoDialogDerrota = { "titulo": "Boa sorte na proxima ", "bodyText":"Eitaaa, na proxima vc consegue\nContinue para:\n -> Aprender mais sobre o livro\n -> Compartilhar seu resultado \n -> Nos mandar seu feedback"};

    const history = useHistory();

    const {user,setUser} = useContext(UsuarioContext);
    const {queLivroDataObject} = useContext(GameInfoContext);
    
    const [tutorialDialog,setTutorialDialog] = useState(true);
    const [dialogOpenLogin, setDialogOpenLogin] = useState(false);
    const [dialogOpenSignIn, setDialogOpenSignIn] = useState(false);
    const [dialogOpenResult,setDialogResult] = useState(false);
    
    const [tentativas,setTentativas] = useState(3);

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
            setDialogResult(true);
        }else{
            setTentativas(prevState => prevState - 1);
        }
      }
      const handleRedirectOnClickToResult = () => {
        history.push('/queLivro/resultados');
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
    
    <ResultDialog open={dialogOpenResult &&  hasWon} title={textoDialogVitoria.titulo} bodyText={textoDialogVitoria.bodyText} handleDialogOpenSignIn={handleDialogOpenSignIn} handleDialogOpenLogin={handleDialogOpenLogin} onClose={handleDialogCloseResult} number={tentativas}/> 

    <ResultDialog open={dialogOpenResult && !hasWon} title={textoDialogDerrota.titulo} bodyText={textoDialogDerrota.bodyText} handleDialogOpenSignIn={handleDialogOpenSignIn} handleDialogOpenLogin={handleDialogOpenLogin} onClose={handleDialogCloseResult} number={tentativas}/>
    
    {queLivroDataObject && <>
    <Grid container padding={2} justifyContent="center">
        <Grid item  xs={12}  textAlign="right">
            <Tooltip title="aaa" >
                <Button size="large"  onClick={handleOpenTutorialDialog} >
                    <HelpIcon/>
                </Button>
            </Tooltip>
        </Grid>

        <Grid item  xs={12}  >
            <Typography  variant="h4" >
                Tentativas sobrando:    {tentativas}
            </Typography>
        </Grid>
        <Grid item xs={12} textAlign="right">
            <ButtonGroup>
            {!user ? <>  
                <Button size="large" variant="outlined" onClick={handleDialogOpenSignIn}>Sign In</Button>
                <Button size="large" variant="outlined" onClick={handleDialogOpenLogin}>Login</Button>
            </>:
                <Button  size="large" variant="outlined" onClick={handleLogOut}>Logout</Button>}
            </ButtonGroup>
        </Grid>
            <Grid item xs={1}>  
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
                            {queLivroDataObject.sumarioA}
                        </Typography>
                    </Grid>
                    {(tentativas<=2) && <Grid item xs={12} textAlign="left">
                        <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                        {queLivroDataObject.sumarioB}
                        </Typography>
                    </Grid>}
                    {(tentativas<=1) && <Grid item xs={12} textAlign="left">
                        <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                        {queLivroDataObject.sumarioC}
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
                        {queLivroDataObject.trechoDificil}
                        </Typography>
                    </Grid>
                    {(tentativas<=2) && <Grid item xs={12} textAlign="left">
                        <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                        {queLivroDataObject.trechoMedio}
                        </Typography>
                    </Grid>}
                    {(tentativas<=1) && <Grid item xs={12} textAlign="left">
                        <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                        {queLivroDataObject.trechoFacil}
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
                        {queLivroDataObject.dicaA}
                        </Typography>
                    </Grid>
                    {(tentativas<=2) && <Grid item xs={12} textAlign="left">
                        <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                        {queLivroDataObject.dicaB}
                        </Typography>
                    </Grid>}
                    {(tentativas<=1) && <Grid item xs={12} textAlign="left">
                        <Typography padding={1} borderTop={2} borderColor="ActiveBorder">
                        {queLivroDataObject.dicaC}
                        </Typography>
                    </Grid> }
                </Paper>
            </Grid>
            <Grid item alignSelf="center" xs={6}>
                <GuessField handleTentativa={handleTentativa} isPlaying={isPlaying}/>
            </Grid>

        </Grid>
            <Grid container justifyContent="right" padding={5}>
                <Grid item xs={4} alignContent="end" >
                    <Button disabled={!user || isPlaying } variant="contained" onClick={handleRedirectOnClickToResult}>
                        Continuar
                    </Button>
                </Grid>
            </Grid>
        </>}
    </>
    );
}
 
export default ModuloQueLivro;