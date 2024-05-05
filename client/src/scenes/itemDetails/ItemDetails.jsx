import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  Grid,
  TextField,
} from "@mui/material";
import WhatsAppButton from "../../components/WhatsAppButton";
import imagePix from "../../assets/iconsMeiosPagamento/logo-pix-png-954x339.png";
import imageCard from "../../assets/iconsMeiosPagamento/cartao-de-credito.png";
import { BoxMeiosPagamentos } from "../../components/BoxMeiosPagamentos";
import { ProdutoCard } from "../../components/ProdutoCard";
import { Descricao } from "./Descricao";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState("");
  const [bestSellers, setBestSellers] = useState([]);
  const [cep, setCep] = useState("");
  const [showCep, setShowCep] = useState(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/admin/productsId/${id}`
        );
        setItem(response.data);
        if (response.data.variacoes && response.data.variacoes.length > 0) {
          setSelectedVariation(response.data.variacoes[0].nome);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const getItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/admin/getBestSellers"
        );
        setBestSellers(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchItem();
    getItems();
  }, [id]);

  console.log(item)

  const descontoOff = item ? item.preco * (1 - item.off / 100) : 0;
  const descontoPix = item ? descontoOff * (1 - item.offPix / 100) : 0;



  return (
    <>
      <Box
        sx={{
          maxWidth: 1200,
          margin: "80px auto 20px ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: matches ? "wrap" : "none",
        }}
      >
        {item ? (
          <>
            <Card
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                mb: 2,
                flexWrap: "wrap",
                "@media (min-width: 600px)": {
                  flexWrap: "nowrap",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "50%", objectFit: "cover" }}
                image={`http://localhost:3002/${item.imagensUrl[0]}`}
                alt={item.nome}
              />
              <CardContent
                sx={{ width: matches ? "100%" : "40%", textAlign: "left" }}
              >
                <Typography gutterBottom variant="h2" component="div">
                  {item.nome}
                </Typography>
                <Typography variant="h6" color="primary">
                  <s>R$ {item.preco.toFixed(2)}</s>
                </Typography>
                <Typography variant="h5" color="primary">
                  <strong>R$ {descontoOff.toFixed(2)}</strong> {item.off}% OFF
                </Typography>

                {item.variacoes && item.variacoes.length >= 0 && (
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Sabor</InputLabel>
                    <Select
                      value={selectedVariation}
                      label="Sabor"
                      onChange={(e) => setSelectedVariation(e.target.value)}
                    >
                      {item.variacoes.map((variacao) => (
                        <MenuItem key={variacao._id} value={variacao.nome}>
                          {variacao.nome}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                <Box
                  sx={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "20px",
                  }}
                >
                  <BoxMeiosPagamentos
                    urlImage={imagePix}
                    texto="% DE DESCONTO "
                    desconto={item.offPix}
                    precoFinal={descontoPix}
                  />
                  <hr />
                  <BoxMeiosPagamentos
                    urlImage={imageCard}
                    texto="EM ATÉ 3X SEM JUROS"
                    precoFinal={descontoOff}
                  />
                </Box>

                <Box>
                  <TextField
                    label="Calcule o prazo de entrega"
                    variant="outlined"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        setShowCep(true)
                      }
                    }}
                    sx={{ width: "100%", m: "9px 0" }}
                  />
                </Box>

                {showCep ?
                  (<Box>Chegará sábado por R$ 15,35 no endereço {cep}</Box>) : (<></>)
                }

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, background: "#3c0d74" }}
                >
                  Adicionar ao carrinho
                </Button>
              </CardContent>
            </Card>

            <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
              <Typography variant="h3">ITENS QUE VOCÊ PODE GOSTAR</Typography>
            </Box>

            <Grid
              container
              spacing={matches ? 1 : 2}
              sx={{ maxWidth: "100%", paddingTop: "20px" }}
            >

              {bestSellers.slice(0, 4).map((item, i) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={item._id}>
                  <ProdutoCard key={item.nome} item={item} />
                </Grid>
              ))}
            </Grid>

            <Descricao item={item} />
          </>
        ) : (
          <Typography>Carregando detalhes do produto...</Typography>
        )}
      </Box>
      <WhatsAppButton />
    </>
  );
};

export default ItemDetails;
