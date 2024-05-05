import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="#3c0d74" color="white">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography variant="h3" fontWeight="bold" mb="30px">ML Vipe Shop</Typography>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Projetada para destacar a qualidade e a singularidade de seus produtos: --- **Bem-vindo à ML VAPE Shop – A Excelência em Vaping Redefinida**
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            Sobre Nós
          </Typography>
          <IconButton  sx={{color:'white'}} onClick={() => navigate("/sobrenos")}>
          <Typography>Sobre Nossa loja</Typography>
          </IconButton>
          <IconButton sx={{color:'white'}} onClick={() => navigate("/termosecondicoes")}>
            <Typography mb="30px" >Termos e Condições</Typography>
          </IconButton>
          <IconButton sx={{color:'white'}} onClick={() => navigate("/politicadeprivacidade")}>
            <Typography mb="30px">Politicas de Privacidade</Typography>
          </IconButton>
        </Box>

        <Box width="clamp(20%, 25%, 30%)" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: mredwardroh@gmail.com
          </Typography>
          <Typography mb="30px">(+55) 34 99726-7144</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
