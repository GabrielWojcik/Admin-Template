import { useState } from "react";
import AuthInput from "../src/components/auth/AuthInput";
import { IconeAtencao } from "../src/components/icons";
import useAuth from "../src/data/hook/useAuth";

export default function Autenticacao() {

    const { cadastrar, login, loginGoogle } = useAuth()

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)

    function exibirErro(msg, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

  async function submeter() {
        try{
            if(modo === 'login') {
             await login(email, senha)
            } else {
             await cadastrar(email, senha)
            }
        } catch(e) {
            exibirErro(e?.message ?? 'Erro desconhecido!')
        }
    }
    return(
        <div className="flex  h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="Imagem da Tela de Autenticação" 
                className="h-screen w-full object-cover"
                />
            </div>
        <div className="w-full md:w-1/2 m-10 lg:w-1/3 ">
            <h1 className={`
            text-3xl font-bold mb-5
            `}>
                {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
            </h1>

            {erro ? (
                 <div className={`
                 flex items-center 
                 bg-red-400 text-white py-3 px-5 my-2
                 border border-red-700 rounded-lg
                 `}>
                     {IconeAtencao()}
                     <span className="ml-3">{erro}</span>
                 </div>

            ) : false }

            <AuthInput
            label="Email"
            tipo="email"
            valor={email}
            valorMudou={setEmail}
            obrigatorio
            />
           
            <AuthInput
            label="Senha"
            tipo="password"
            valor={senha}
            valorMudou={setSenha}
            obrigatorio
            />
            
            <AuthInput
            label="Confirmação de Senha"
            tipo="password"
            valor={senha}
            valorMudou={setSenha}
            obrigatorio
            naoRenderizarQuando={true}
            />

            <button onClick={submeter} className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
            `}>
                 {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr  className="my-6 border-gray-300 w-full"/>

            <button onClick={loginGoogle} className={`
            w-full bg-red-500 hover:bg-red-400
            text-white rounded-lg px-4 py-3 
            `}>
                Entrar com o Google
            </button>

            {modo === 'login' ? (
                <p className="mt-8">
                    Novo por aqui?
                    <a onClick={() => setModo('cadastro')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                    `}> Crie uma Conta Gratuitamente
                    </a>
                </p>
            ) : (
                <p className="mt-8">
                Já faz parte da nossa comunidade?
                <a onClick={() => setModo('login')} className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                `}> Entre com a suas Credenciais
                </a>
            </p>

            )}
        </div>
        </div>
    )
}