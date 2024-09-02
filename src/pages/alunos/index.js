
import './index.scss'
import { useState } from 'react'

import CartaoAluno from '../../componentes/cartaoAluno';

export default function Alunos(){

    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [conhecimentos, setConhecimentos] = useState('');
    const [avatar, setAvatar] = useState('');

    const [alunos, setAlunos] = useState([]);
    function cadastrar(){
        let aluno = {
            nome: nome,
            chamada:chamada,
            curso:curso,
            conhecimentos: conhecimentos,
            avatar: avatar
        }

        setAlunos([...alunos, aluno]);

    }

    return(
        <div className='pagina-alunos'>
            <h1>Alunos</h1>
            <div className='form'>
                <h2> Cadastrar Aluno</h2>

            <div>
                <label>Nome:</label>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div>
                <label>Chamada:</label>
                <input type='text' value={chamada} onChange={e => setChamada(e.target.value)}/>
            </div>
            <div>
                <label>Curso:</label>
                <input type='text' value={curso} onChange={e => setCurso(e.target.value)} />
            </div>
            <div>
                <label>Conhecimentos:</label>
                <input type='text' value={conhecimentos} onChange={e => setConhecimentos(e.target.value)} />
            </div>
            <div>
                <label>Avatar:</label>
                <input type='text' value={avatar} onChange={e => setAvatar(e.target.value)} />
            </div>
            
            <div style={{textAlign: 'right', width:'100%'}}>
                <button onClick={cadastrar}>Cadastrar</button>
            
                </div>

            </div>

            <div className='itens2'>
            {alunos.map(item =>
                <CartaoAluno
                nome={item.nome}
                chamada={item.chamada}
                curso={item.curso}
                conhecimentos={item.conhecimentos}
                avatar={item.avatar}

                />
                
                )}

            </div>

           
                       
            
        </div>
    )
}