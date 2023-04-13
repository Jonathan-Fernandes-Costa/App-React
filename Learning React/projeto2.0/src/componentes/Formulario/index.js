import React, {useState} from 'react'
import Botao from '../Botão'
import Campo from '../Campo'
import Lista from '../Lista'
import './Formulario.css'
const Formulario = (props) => {
    const [nome, setNome] = useState('')//Controlando os estados, o primeiro item da lista
    const [desc, setDesc] = useState('')//é responsavel por guardar o valor e o segundo
    const [foto, setFoto] = useState('')//que é uma função, é responsável por atribuir um valor
    const [afinidade, setAfinidade] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvarTime = (evento) =>{
        evento.preventDefault()
        props.cadastrarTime({
            nome : nomeTime,
            cor: corTime
        })
        setNomeTime('')
        setCorTime('')
    }
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoMembroCadastrada({
            nome,
            desc,
            foto,
            afinidade
        })
        setNome('')
        setDesc('')
        setFoto('')
        setAfinidade('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de membro</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <Campo
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Digite a descrição do membro"
                    valor={desc}
                    aoAlterado={valor => setDesc(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Foto"
                    placeholder="Digite o endereço da imagem"
                    valor={foto}
                    aoAlterado={valor => setFoto(valor)}
                />

                <Lista
                    obrigatorio={true}
                    label='Afinidade' 
                    itens={props.afinidades}
                    valor={afinidade} 
                    aoAlterado={valor => setAfinidade(valor)} 
                 />
                <Botao texto="Criar Card"/>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar uma nova afinidade</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome da afinidade"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />

                <Campo
                    tipo="color"
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Digite a cor"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto="Criar Afinidade" />
            </form>
        </section>
    )
}
export default Formulario