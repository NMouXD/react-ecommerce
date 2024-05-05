import { useTheme } from "@emotion/react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProdutoCard = ({ item }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));  // Usa o breakpoint 'sm' que corresponde a 600px
  const navigate = useNavigate();
  const {offPix, off} = item;
  const desconto = item.preco *  (1- off/100)
  const descontoPix = desconto * (1- offPix/100)
  return (
    <Card sx={{ maxWidth: /* matches ? 170 : */ 345, height: "100%"}} onClick={() => navigate(`/item/${item._id}`)}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardMedia
          component="img"
          sx={{ objectFit: 'cover', }}
          image={`http://localhost:3002/${item.imagensUrl}`}
          alt={item.nome}
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparente
          color: 'white',
          padding: '8px',
          fontSize: '0.875rem'
        }}>
          {off !== 0 ? (
            <Typography>{off}% OFF</Typography>
            ) : (
              <Typography>{offPix}% OFF no Pix</Typography>)
              }
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div" color="black">
            {item.nome}
          </Typography>
          {off ? (
          <Typography variant="h7" color="black">
            <s>R${item.preco.toFixed(2)}</s> por <strong>R${desconto.toFixed(2)}</strong>
          </Typography>
        ) : (
        <Typography variant="h7" color="black">
            <strong>R$ {item.preco.toFixed(2)}</strong>
          </Typography>
        )}
          
          <Typography variant="body2" color="black">
            Em até 3x sem juros no CARTÃO
          </Typography>
          <Typography variant="h7" color="black">
            {/* <strong>R${descontoPix.toFixed(2)}</strong> */} {offPix}% OFF no PIX
          </Typography>
          </CardContent>
          <Box sx={{ alignSelf: 'flex-end', width: "100%" }}>
            <Box sx={{
              m: "6px auto",
              p: "5px",
              borderRadius: "5px",
              textAlign: "center",
              background: "#3c0d74",
              color: "white",
              width: matches ? "80%" : "50%",
              '&:hover': { color: 'black', background: "white" }
            }}>Ver Mais</Box>
          </Box>
        
      </CardActionArea>
    </Card>
  );
};