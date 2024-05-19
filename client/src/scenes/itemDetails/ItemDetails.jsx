import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  IconButton,
} from "@mui/material";
import WhatsAppButton from "../../components/WhatsAppButton";
import imagePix from "../../assets/iconsMeiosPagamento/logo-pix-png-954x339.png";
import imageCard from "../../assets/iconsMeiosPagamento/cartao-de-credito.png";
import { BoxMeiosPagamentos } from "../../components/BoxMeiosPagamentos";
import { ProdutoCard } from "../../components/ProdutoCard";
import { Descricao } from "./Descricao";
import axiosInstance from "../../context/axiosConfig";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addCount } from "../../state";


const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState("");
  const [bestSellers, setBestSellers] = useState([]);
  const [cep, setCep] = useState("");
  const [showCep, setShowCep] = useState(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [count, setCount] = useState(1);
  const cart = useSelector((state) => state.cart.items);
  console.log(cart)
  

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axiosInstance.get(
          `/admin/productsId/${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const getItems = async () => {
      try {
        const response = await axiosInstance.get(
          "/admin/getBestSellers"
        );
        setBestSellers(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchItem();
    getItems();
  }, [id]);

  const handleCart = () => {
    // Verifica se o item existe
    const itemExists = cart.find((cartItem) => cartItem.selectedVariation._id === item.selectedVariation._id);
    // Verifica se a variação selecionada corresponde a uma das variações do item
    

      console.log(itemExists)
  
    // Verifica se o item existe e se a variação selecionada é válida
    if (!itemExists) {
      dispatch(addToCart({ item: { ...item, count, selectedVariation } }));
    } else if (itemExists && itemExists.selectedVariation) {
      dispatch(addCount({ _id: item.selectedVariation._id, count }))
    } else {
      alert("Item ou variação inválidos");
    }
  };
  
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
                image={`https://ml-vipe-shop.onrender.com/${item.imagensUrl[0]}`}
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

                {item.variacoes && (
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Sabor</InputLabel>
                    <Select
                      value={selectedVariation ? selectedVariation.nome : ''}
                      label="Sabor"
                      onChange={(e) => setSelectedVariation(item.variacoes.find(variacao => variacao.nome === e.target.value))}
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
                <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid black`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#3c0d74",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => handleCart()}
            >
            ADICIONAR AO CARRINHO
            </Button>
          </Box>
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
