import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModuloQueLivro from './ModuloQueLivro/ModuloQueLivro';
import AdicionarLivros from './Admin/AdicionarLivros';
import Paper from '@mui/material/Paper';
import background from "./imagemFundo.jpg"
import { blue, yellow } from '@mui/material/colors';
function App() {
  const [user,setUser] = useState(null);
  const [userType,setUserType] = useState(null);

  return (
    <Paper>
        <Router>
          <Switch>
            <Route exact path={"/queLivro"}>
              <ModuloQueLivro user={user} userType={userType} setUser={setUser} setUserType={setUserType}/>
            </Route>
            <Route exact path={"/quelivro/resultados"}>
              <div className="mod-quelivro">Pagina com mecanicas Quelivro 'Trademark'</div>
            </Route>
            <Route exact path={"/admin"}>
              <div className="Pagina-login-adm">Autentificação</div>
            </Route>
            <Route exact path={"/admin/menu"}>
              <div className="principal-pagina-adm">pagina menu de administração</div>
            </Route>
            <Route exact path={"/admin/adicionar"}>
              <AdicionarLivros/>
            </Route>
            <Route exact path={"/admin/lista"}>
              <div className="listar-livro-adm">pagina adicionar livro</div>
            </Route>
            <Route path={"*"}>
              <div className="geral">geral</div>
            </Route>
          </Switch>
        </Router>
    </Paper>
  );
}

export default App;
