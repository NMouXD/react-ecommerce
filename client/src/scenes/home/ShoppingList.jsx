import React, { useCallback, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import axiosInstance from "../../context/axiosConfig";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Função para buscar dados
  const fetchProductData = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/admin/productsListen');
      dispatch(setItems(response.data));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, [dispatch]);

   useEffect(() => {
    // Chamada da função
    fetchProductData();
  }, [fetchProductData]); 

  const ignite = items.filter(
    (item) => item.brand === "ignite"
  );
  const elfbar = items.filter(
    (item) => item.brand === "elfbar"
  );
  const oxbar = items.filter(
    (item) => item.brand === "oxbar"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="Elfbar" value="elfbar" />
        <Tab label="Oxbar" value="oxbar" />
        <Tab label="Ignite" value="ignite" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item._id}`} />
          ))}
        {value === "elfbar" &&
          elfbar.map((item) => (
            <Item item={item} key={`${item.name}-${item._id}`} />
          ))}
        {value === "oxbar" &&
          oxbar.map((item) => (
            <Item item={item} key={`${item.name}-${item._id}`} />
          ))}
        {value === "ignite" &&
          ignite.map((item) => (
            <Item item={item} key={`${item.name}-${item._id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
