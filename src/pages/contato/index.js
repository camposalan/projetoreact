import './index.scss'

import Cabecalho from '../../componentes/cabecalho'

import { Link } from 'react-router-dom'

export default function Contato(){
    return(
        <div className='pagina-contato'>
            <Cabecalho></Cabecalho>
            <Link to='/'>Voltar</Link>

            <main>
            <h1 className='titulo'> Contato </h1>

            <div>
                <h2> Alan</h2>
                <h3> 22997315476 </h3>
                <h3>camposalan@hotmail.com</h3>
            </div>


            
            

            </main>

            
            
            
        </div>

        
    )
}