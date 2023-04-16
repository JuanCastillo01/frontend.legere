import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { createTheme } from '@mui/material';

import { UsuarioContext } from './components/UsuarioContext';

import ModuloQueLivro from './components/ModuloQueLivro/ModuloQueLivro';
import AdicionarLivros from './components/Admin/AdicionarLivros';
import Layout from '../src/components/Layout';
import ListarLivros from './components/Admin/ListarLivros';
function App() {
  const [user,setUser] = useState(null);
  const [userType,setUserType] = useState(false);

  useEffect(() => {
    if (user === 'admin'){
      setUserType(true);
    } else {setUserType(false)}
  },[user]
  )

  // const theme = createTheme({
  //   palette: {
  //     type: 'light',
  //     primary: {
  //       main: '#bdb2a3',
  //     },
  //     secondary: {
  //       main: 'rgba(208,36,74,0.84)',
  //     },
  //     background: {
  //       default: '#251515',
  //       paper: '#f5dbbe',
  //     },
  //     error: {
  //       main: '#ff1000',
  //     },
  //     text: {
  //       primary: 'rgba(123,121,121,0.87)',
  //     },
  //   },
  //   typography: {
  //     fontSize: 17,
  //   },
  
  // });

  return (
    // <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
            <UsuarioContext.Provider value={{user,setUser,userType}}>
              <Route exact path={"/"}>
                <ModuloQueLivro/>
              </Route>
                <Route exact path={"/queLivro"}>
                  <ModuloQueLivro/>
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
            </UsuarioContext.Provider>

          </Switch>
      </Layout>
    </Router>
    // </ThemeProvider>
    
  );
}

export default App;
