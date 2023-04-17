import { Typography } from "@mui/material";

const AdminLayout = ({children}) => {
    return (
        <div>
            <Typography variant="h2" align="center"> MenuList </Typography>
                
            <div className="paginas">
            {children}
            </div>
        </div>
    );
}
 
export default AdminLayout;