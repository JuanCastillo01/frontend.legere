import { Typography } from "@mui/material";

const PrincipalLayout = ({children}) => {
    return (
        <div>
            <Typography variant="h2" align="center">Cabeçalho </Typography>
            <div className="paginas">
            {children}
            </div>
        </div>
    );
}
 
export default PrincipalLayout;