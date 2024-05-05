import { Box, Typography } from "@mui/material"


export const Descricao = (item) => {

    return (
        <Box width="80%" marginTop={5} color="black">
            <Typography><strong>{item.item.descricaoTitle}</strong></Typography>
            <Typography>{item.item.descricaoText}</Typography>
            <Typography><strong>{item.item.caracteristicasTitle}</strong></Typography>
            <Typography>{item.item.caracteristicasText}</Typography>
            <Typography><strong>{item.item.instrucaoTitle}</strong></Typography>
            <Typography>{item.item.instrucaoText}</Typography>
        </Box>
    )
}