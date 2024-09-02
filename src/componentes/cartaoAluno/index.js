import './index.scss'

export default function CartaoAluno(props){


    return( 
        <div className='comp-cartao-aluno'>
            <img src={props.avatar} />
            <div>
                
            </div>
            <div className='info'>
            <div className='nome'> {props.nome}</div>
            <div className='nome'> Chamada{props.chamada}</div>
            <div> Curso:{props.curso}</div>
            <div> Conhecimentos:{props.conhecimentos}</div>

            </div>

        </div>
    )
}