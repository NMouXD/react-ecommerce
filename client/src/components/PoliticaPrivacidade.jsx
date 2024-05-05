import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Política de Privacidade
      </Typography>
      <Typography variant="body1" paragraph>
        A ML Vipe Shop respeita a sua privacidade e está comprometida em proteger os dados pessoais que coletamos sobre você. Esta política descreve as práticas de informações para o site da ML Vipe Shop, incluindo que tipo de dados são coletados, como esses dados são usados e protegidos, e as escolhas que você tem em relação ao uso de seus dados.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Coleta de Dados Pessoais
      </Typography>
      <Typography variant="body1" paragraph>
        Coletamos informações que você fornece diretamente a nós ao criar uma conta, realizar uma compra ou se comunicar conosco. Isso pode incluir, mas não está limitado a, seu nome, endereço de email, endereço postal, número de telefone e informações de pagamento.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Uso de Dados
      </Typography>
      <Typography variant="body1" paragraph>
        Usamos as informações coletadas para fornecer, manter, proteger e melhorar nossos serviços, para desenvolver novos serviços e para proteger a nós e nossos usuários. Também usamos essas informações para oferecer conteúdo personalizado – como mostrar-lhe produtos ou anúncios que achamos que podem interessar-lhe.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Compartilhamento de Informações
      </Typography>
      <Typography variant="body1" paragraph>
        Compartilhamos informações pessoais com empresas, organizações ou indivíduos externos à ML Vipe Shop quando temos seu consentimento para fazê-lo. Exigimos um acordo de confidencialidade de nossos serviços parceiros para garantir a segurança de seus dados pessoais.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Segurança dos Dados
      </Typography>
      <Typography variant="body1" paragraph>
        Tomamos medidas apropriadas para proteger contra acesso não autorizado ou alteração, divulgação ou destruição de dados. Isso inclui, entre outras medidas, criptografia de dados durante a transmissão e armazenamento, e sistemas de segurança para prevenir acessos não autorizados aos nossos sistemas.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Alterações na Política de Privacidade
      </Typography>
      <Typography variant="body1" paragraph>
        Nossa Política de Privacidade pode mudar de tempos em tempos. Não reduziremos seus direitos sob esta Política de Privacidade sem o seu consentimento explícito. Publicaremos quaisquer alterações de política de privacidade nesta página e, se as alterações forem significativas, forneceremos um aviso mais destacado.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Contato
      </Typography>
      <Typography variant="body1" paragraph>
        Se você tem quaisquer perguntas sobre esta Política de Privacidade ou o tratamento de seus dados pessoais, por favor entre em contato conosco enviando um email para contato@mlvipeshop.com.br.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;