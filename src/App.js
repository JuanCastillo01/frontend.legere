import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModuloQueLivro from './ModuloQueLivro/ModuloQueLivro';
import AdicionarLivros from './Admin/AdicionarLivros';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from '../src/Admin/Layout';
import ListarLivros from './Admin/ListarLivros';
import DialogBoxSignIn from './ModuloQueLivro/DialogBoxSignIn';
function App() {
  const [user,setUser] = useState(null);
  const [userType,setUserType] = useState(null);
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#bdb2a3',
      },
      secondary: {
        main: 'rgba(208,36,74,0.84)',
      },
      background: {
        default: '#251515',
        paper: '#f5dbbe',
      },
      error: {
        main: '#ff1000',
      },
      text: {
        primary: 'rgba(123,121,121,0.87)',
      },
    },
    typography: {
      fontSize: 17,
    },
  
  });

  return (
    // <ThemeProvider theme={theme}>
        <Router>
          <Layout>
          <Switch>
            
          <Route exact path={"/"}>
              <DialogBoxSignIn/>
            </Route>
            <Route exact path={"/queLivro"}>
              <ModuloQueLivro user={user} userType={userType} setUser={setUser} setUserType={setUserType}/>
            </Route>
            <Route exact path={"/quelivro/resultados"}>
              <div className="mod-quelivro">Pagina com mecanicas Quelivro 'Trademark'</div>
            </Route>
            <Route exact path={"/admin"}>
            </Route>
            <Route exact path={"/admin/menu"}>
              <div className="principal-pagina-adm">pagina menu de administração</div>
            </Route>
            <Route exact path={"/admin/adicionar"}>
              <AdicionarLivros/>
            </Route>
            <Route exact path={"/admin/lista"}>
                <ListarLivros/>
            </Route>
            <Route path={"*"}>
              <div className="geral">Error page</div>
            </Route>
          </Switch>
          </Layout>
        </Router>
    // </ThemeProvider>
    
  );
}

export default App;
