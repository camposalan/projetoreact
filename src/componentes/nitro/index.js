import './index.scss'


export default function Nitro(props){
    return(
        <div className='comp-nitro'>
            <h1>{props.titulo}</h1>
            <img src={props.imagem} />
        </div>
    )
}