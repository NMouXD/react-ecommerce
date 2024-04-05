// Importe o pacote
import Correios from "node-correios";
const correios = new Correios();

// Supondo que você esteja usando Express
export const calcularFrete = async (req, res) => {
  const { cep } = req.body;

  const args = {
    nCdServico: '04014', // SEDEX
    sCepOrigem: '38800000',
    sCepDestino: cep,
    nVlPeso: '0.1', // 100g em kg
    nCdFormato: '1', // Formato caixa/pacote
    nVlComprimento: '10', // em cm
    nVlAltura: '12', // em cm
    nVlLargura: '6', // em cm
    nVlDiamentro: '0',
  };

  try {
    const result = await correios.calcPreco(args);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};