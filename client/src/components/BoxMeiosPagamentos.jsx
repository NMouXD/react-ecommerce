import { Box, CardMedia, Typography } from "@mui/material"


export const BoxMeiosPagamentos = ({urlImage, desconto, texto, precoFinal}) =>{

    return(
        
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "auto", marginRight: "5%" }}>
                      <CardMedia
                        sx={{
                          objectFit: "cover",
                          height: "2rem",
                        }}
                        component="img"
                        alt="logo Meio de pagamento"
                        image={urlImage}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        width: "auto",
                      }}
                    >
                      <Typography marginRight={1}>{desconto}{texto} </Typography>
                      <Typography fontSize={14}>
                        <strong>{precoFinal.toFixed(2)}</strong>
                      </Typography>
                    </Box>
                    
                  </Box>

                  
                
    )
}