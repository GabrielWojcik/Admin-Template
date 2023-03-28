import EscolherAvatar from "../src/components/template/EscolherAvatar";
import Layout from "../src/components/template/Layout";

export default function Ajustes() {
  return (
    <Layout
    titulo="Ajustes & Configurações"
    subtitulo="Personalize o sistema por aqui"
    >
      <EscolherAvatar />
    </Layout>
  )
}
