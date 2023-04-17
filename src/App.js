import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { createTheme } from '@mui/material';

import { UsuarioContext } from './components/contexts/UsuarioContext';

import ModuloQueLivro from './components/ModuloQueLivro/ModuloQueLivro';
import AdicionarLivros from './components/Admin/AdicionarLivros';
import PrincipalLayout from '../src/components/Layouts/PrincipalLayout';
import ListarLivros from './components/Admin/ListarLivros';
import ReultadosQueLivros from './components/ResultadosQueLivros/ReultadosQueLivros';
import { GameInfoContext } from './components/contexts/GameInfoContext';
import useFetch from './components/requestModels/usefetch';

function App() {
  const [user,setUser] = useState(null);
  const [userType,setUserType] = useState(false);

  const [queLivroListaTentativas,setQueLivroListaTentativas] = useState(null);
  const [queLivroResultTentativas,setQueLivroResultTentativas] = useState(null);
  const {data:queLivroDataObject} = useFetch("http://localhost:8080/api/quelivro");


  useEffect(() => {
    if (user === 'admin'){
      setUserType(true);
    } else {setUserType(false)}
  },[user]
  )

  return (
    // <ThemeProvider theme={theme}>
    <Router>
      <PrincipalLayout>
        <Switch>
          <UsuarioContext.Provider value={{user,setUser,userType}}>
            <GameInfoContext.Provider value={{queLivroDataObject,setQueLivroResultTentativas,setQueLivroListaTentativas}}>
              <Route exact path={"/"}>
                <Redirect to={"/queLivro"} />
              </Route>
              <Route exact path={"/queLivro"}>
                <ModuloQueLivro/>
              </Route>
            </GameInfoContext.Provider>
            <GameInfoContext.Provider value={{queLivroDataObject,queLivroResultTentativas,queLivroListaTentativas}}>
              <Route exact path={"/quelivro/resultados"}>
                <ReultadosQueLivros/>
              </Route>
            </GameInfoContext.Provider>
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
      </PrincipalLayout>
    </Router>
    // </ThemeProvider>
    
  );
}

export default App;
