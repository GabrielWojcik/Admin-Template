import Layout from "../src/components/template/Layout";
import Tabela from "../src/components/template/Tabela";

export default function Home() { 
  return (
    <Layout
    titulo="Pagina inicial"
    subtitulo=""
    >
      <Tabela />
    </Layout>
  )
}
