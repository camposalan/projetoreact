import './index.scss';
import Cabecalho from '../../componentes/cabecalho';

import { Link } from 'react-router-dom';

import Nitro from '../../componentes/nitro';


export default function App() {
  return (

    <div className="pagina-app">
      <Cabecalho></Cabecalho>
     
       <h3 className='titulo'> Alan      </h3> 
       <div className='menu'>
        
        <Link to='/variavel'>Exemplos de Uso</Link>
        <Link to='/alunos'>Alunos</Link>
        <Link to='/renderizacao'>Renderizacao</Link>
        <Link to='/api'>Api</Link>

        


       </div>

       <img className ='hulk'src='/assets/images/pantera.jpeg'/>

       

       <div className='pagina-discord'>
            <h1> Nitro Popular</h1>
            <div className='itens'>
                <Nitro titulo="Faça transmissões de aplicativos e jogos em HD" 
                imagem="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e745e5817574c745fcc0_Stream%20apps.svg" />

                <Nitro titulo="De clipes a fotos, compartilhe à vontade com uploads maiores" 
                imagem="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8f1d5429528ae89f64cf0_Clips%20to%20pics.svg" />

                              
               
            </div>
       
       

      

       
          

    </div>
   
             
    </div>
    
  );
}

