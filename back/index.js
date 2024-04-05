import 'dotenv/config';
import express from "express";
import connectDB from "./src/db/db.js"
import productRoutes from './src/routes/products.route.js';
import userRoutes from './src/routes/user.route.js';
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.use("/admin", productRoutes)
app.use('/user', userRoutes);


connectDB()

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})