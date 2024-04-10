import 'dotenv/config';
import express from "express";
import connectDB from "./src/db/db.js"
import productRoutes from './src/routes/products.route.js';
import userRoutes from './src/routes/user.route.js';
import cors from "cors";
import { enviarEmailAbandonedCart } from './src/controllers/cartAbandoned.controller.js';
import cron from 'node-cron';

const app = express();
app.use(express.json())
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.use("/admin", productRoutes)
app.use('/user', userRoutes);

await connectDB()

// Verificar carrinhos abandonados e enviar e-mails de desconto
cron.schedule('0 0 * * *', async () => { // Roda todos os dias à meia-noite
    const umaSemanaAtras = new Date(new Date() - 7 * 24 * 60 * 60 * 1000);
    const clientes = await User.find({ "carrinho.0": { $exists: true }, carrinhoAbandonadoEm: { $lte: umaSemanaAtras } });

    clientes.forEach(cliente => {
        enviarEmailAbandonedCart(cliente);
    });
});

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Server runing in port http://localhost:${port}`)
})