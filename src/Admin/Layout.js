import { Typography } from "@mui/material";

const Layout = ({children}) => {
    return (
        <div>
            <Typography variant="h1" align="center">Legere Logo :Que Livro </Typography>
            <div className="paginas">
            {children}
            </div>
            {//<Typography variant="h2" align="center">Rodape/links </Typography>
            }
        </div>
    );
}
 
export default Layout;