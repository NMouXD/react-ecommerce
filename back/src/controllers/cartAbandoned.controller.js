import nodemailer from 'nodemailer';
import User from '../models/user.model.js';

export const atualizarCarrinho = async (req, res) => {
    const { clienteId, itensCarrinho } = req.body;
    try {
        await User.findByIdAndUpdate(clienteId, {
            $set: { carrinho: itensCarrinho, carrinhoAbandonadoEm: new Date() }
        });
        res.send({ message: 'Carrinho atualizado com sucesso.' });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao atualizar o carrinho.' });
    }
};

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Exemplo para Gmail
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
        user: process.env.USER_MAILE,
        pass: process.env.PASS_MAILE
    }
});

export const enviarEmailAbandonedCart = async (cliente) => {
    const mailOptions = {
        from: process.env.USER_MAILE,
        to: cliente.email,
        subject: 'Volte e complete sua compra com 10% de desconto!',
        text: 'Percebemos que você esqueceu alguns itens no carrinho. Use o código DESCONTO10 para obter 10% off na sua próxima compra!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar e-mail:', error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
};

