import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModuloQueLivro from './ModuloQueLivro/ModuloQueLivro';
import AdicionarLivros from './Admin/AdicionarLivros';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from '../src/Admin/Layout';
import ListarLivros from './Admin/ListarLivros';
function App() {
  const [user,setUser] = useState(null);
  const [userType,setUserType] = useState(null);
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#60392a',
      },
      secondary: {
        main: '#ff0000',
      },
      background: {
        default: '#F3F3E7',
        paper: '#e6e6c7',
      },
      error: {
        main: '#0056ff',
      },
      warning: {
        main: '#0097ff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Layout>
          <Switch>
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
              <div className="geral">geral</div>
            </Route>
          </Switch>
          </Layout>
        </Router>
    </ThemeProvider>
    
  );
}

export default App;
