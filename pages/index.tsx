import Layout from "../src/components/template/Layout";
// import Tabela from "../src/components/template/Tabela";

export default function Home() {

  // const  {imagem, alternarImagem} = useAppImage()

  // console.log('IMAGEM NO INDEX', imagem)
  // console.log('alternarImagem', alternarImagem)

  return (
    <Layout
    titulo="Pagina inicial"
    subtitulo="Estamos construindo um template admin"
    >
      <h3>Conteudo</h3>
      {/* <Tabela /> */}
    </Layout>
  )
}
