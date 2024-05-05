import { Container, Typography } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Termos e Condições de Uso
      </Typography>
      <Typography variant="body1" paragraph>
        Seja bem-vindo ao ML Vipe Shop! Ao utilizar nosso website, você concorda em seguir e estar vinculado pelos seguintes termos e condições de uso. Por favor, revise-os cuidadosamente. Se você não concorda com estes termos e condições, por favor, não use este site.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Uso do Site
      </Typography>
      <Typography variant="body1" paragraph>
        Você garante que usará este site apenas para fins legais e de maneira que não infrinja, restrinja ou iniba o uso e gozo do site por qualquer terceiro. Proibida a postagem ou transmissão através do site de qualquer material ilegal, ameaçador, difamatório, obsceno, indecente, inflamatório, pornográfico ou profano.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Direitos Autorais
      </Typography>
      <Typography variant="body1" paragraph>
        Todo o conteúdo incluído no site, como texto, gráficos, logotipos, ícones de botões, imagens, clipes de áudio e software, é propriedade do ML Vipe Shop ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais do Brasil e internacionais. A compilação de todo o conteúdo neste site é de propriedade exclusiva do ML Vipe Shop.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Isenção de Garantias e Limitação de Responsabilidade
      </Typography>
      <Typography variant="body1" paragraph>
        Este site é fornecido pelo ML Vipe Shop em uma base "como está" e "como disponível". O ML Vipe Shop não faz representações ou garantias de qualquer tipo, expressas ou implícitas, quanto à operação do site ou à informação, conteúdo, materiais ou produtos incluídos neste site.
      </Typography>
      <Typography variant="body1" paragraph>
        Ao usar este site, você concorda que o uso é por sua conta e risco. O ML Vipe Shop, nem seus diretores, funcionários, agentes, terceiros, fornecedores, garantem que o uso deste site será ininterrupto ou livre de erros.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Política de Privacidade
      </Typography>
      <Typography variant="body1" paragraph>
        Consulte também a nossa Política de Privacidade, que também governa seu uso do ML Vipe Shop, para entender nossas práticas.
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;