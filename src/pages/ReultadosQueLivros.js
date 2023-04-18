import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { GameInfoContext } from "../components/contexts/GameInfoContext";
import FormularioOpiniao from "../components/FormularioOpinião";
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRef } from "react";

const ReultadosQueLivros = ({}) => {
    const {queLivroListaTentativas, queLivroResultTentativas} = useContext(GameInfoContext);
    const  {queLivroDataObject} =  useContext(GameInfoContext);
    
    const queLivroDataObjectLocal =useRef(queLivroDataObject);

    return (
        <>
            <Grid container xs={12}  spacing={2}>
                <Grid item xs={9} padding={2}>
                    <Paper  elevation={6}  className="field-show-livro">
                         <Typography className="titulo"variant="h3" padding={2}>
                         {queLivroDataObjectLocal.nomeLivro}
                         </Typography>
                         <Typography className="l   abel-secundario" variant="h5" padding={2}>
                         {`Autor: ${queLivroDataObjectLocal.autoria}`}
                         </Typography>
                         <Typography className="label-secundario" variant="h5" padding={2}> 
                         {`Curiosidades: `}
                         </Typography>
                         <Typography className="label-secundario" variant="h6" padding={2}>
                            &emsp;{`-${queLivroDataObjectLocal.dicaA}`}<br />
                            &emsp;{`-${queLivroDataObjectLocal.dicaB}`}<br />
                            &emsp;{`-${queLivroDataObjectLocal.dicaC}`}
                         </Typography>
                         <Typography className="label-secundario" variant="h5" padding={2}> 
                         Resumo: 
                         </Typography>
                         <Typography className="label-secundario" variant="h6" padding={2}>
                         &emsp;{`${queLivroDataObjectLocal.sumarioA}`}<br />&emsp;
                            {`${queLivroDataObjectLocal.sumarioB}`}<br />&emsp;  
                            {`${queLivroDataObjectLocal.sumarioC}`}
                         </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3    }>
                    <Grid item xs={12} paddingBottom={2} >
                        <Paper elevation={6} className="field-show-result">
                            <Grid container justifyContent="center">
                            <Grid item xs={10} alignContent="center">
                                <Typography align="center" variant="h5">Pontuação</Typography>
                            </Grid>
                            
                            {Array.from({ length: queLivroResultTentativas }).map(()=>
                            <Grid item xs={4} textAlign="center">
                                <Typography variant="h4">
                                    S2
                                </Typography>
                            </Grid>)}
                                
                            
                            <Grid item xs={12}>
                                <List>
                                {queLivroListaTentativas.map((tentativa,index)=>
                                <ListItem divider>
                                    <ListItemText primary={tentativa} secondary={index+queLivroResultTentativas===3 ? "Correto" : "Errou"}>
                                    </ListItemText>
                                    <ListItemIcon>
                                    {index+queLivroResultTentativas===3 ? <CheckIcon/> : <CancelIcon/>}
                                    </ListItemIcon>
                                </ListItem>
                            )}
                            </List>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={6} className="field-show-result">
                            <FormularioOpiniao/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
 
export default ReultadosQueLivros;