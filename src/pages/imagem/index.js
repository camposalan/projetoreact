import './index.scss';

import Cabecalho from '../../componentes/cabecalho';

import { Link } from 'react-router-dom';

export default function Imagem(){
    return(

        <div className='pagina-imagem'>
            <h1 className='titulo'>Imagem</h1>
            
                <Link to='/'>Voltar</Link>

                

            <img className ='hulk'src='/assets/images/hulk.png'/>

        </div>
    

    )
        
    
    }
