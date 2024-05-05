import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Grid, useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";
import { ProdutoCard } from "../../components/ProdutoCard";

const ShoppingList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState({});
  const [categoriaAtual, setCategoriaAtual] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/admin/productsListen")
      .then((response) => {
        const dados = response.data; // Assumindo que a resposta é um array de produtos
        const produtosOrganizados = dados.reduce((acc, produto) => {
          const { categoria } = produto;
          if (!acc[categoria]) {
            acc[categoria] = [];
          }
          acc[categoria].push(produto);
          return acc;
        }, {});

        // Adicionando produtos mais vendidos apenas se houver produtos elegíveis
        const maisVendidos = dados
          .filter((produto) => produto.bestSellers >= 0)
          .sort((a, b) => b.bestSellers - a.bestSellers);

        // Certifique-se de adicionar 'Mais Vendidos' apenas uma vez
        if (maisVendidos.length > 0) {
          produtosOrganizados["Mais Vendidos"] = maisVendidos;
        }

        let categoriasUnicas = [...new Set(Object.keys(produtosOrganizados))];
        // Se 'Mais Vendidos' está presente, garanta que ele apareça primeiro
        if (categoriasUnicas.includes("Mais Vendidos")) {
          categoriasUnicas = [
            "Mais Vendidos",
            ...categoriasUnicas.filter((c) => c !== "Mais Vendidos"),
          ];
        }

        setCategorias(categoriasUnicas);
        setProdutos(produtosOrganizados);
        setCategoriaAtual(categoriasUnicas[0]);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const handleChangeCategoria = (evento, novaCategoria) => {
    setCategoriaAtual(novaCategoria);
  };

  return (
    <Box
      sx={{ flexGrow: 1, paddingTop: "70px" }}
      width={matches ? "100%" : "80%"}
      margin={matches ? "0" : "0 10%"}
    >
      <Tabs
        value={categoriaAtual}
        onChange={handleChangeCategoria}
        variant= {matches ? "scrollable" : "none"}
        scrollButtons={matches ? "auto" : "none"}
        allowScrollButtonsMobile
        aria-label="Categorias dos produtos"
        centered={true}
        sx={{
          marginBottom: "2rem"
        }}
      >
        {categorias.map((categoria) => (
          <Tab label={categoria} value={categoria} key={categoria} />
        ))}
      </Tabs>
      <Grid
        container
        spacing={matches ? 1 : 2}
        sx={{
          maxWidth: 800,
          margin: "0 auto",
          paddingTop: "20px",
        }}
      >
        {produtos[categoriaAtual]?.map((item) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={item._id}>
            <ProdutoCard key={item.nome} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ShoppingList;
