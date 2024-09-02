import { useState } from 'react'
import './index.scss'
import axios from 'axios'

import Nitro from '../../componentes/nitro';

export default function Api(){

    const[cep, setCEP] = useState('');
    const [resultadoCorreio, setResultadoCorreio] = useState('')

    const[filme, setFilme] = useState('');
    const[resultadoFilmes, setResultadoFilmes] = useState([])

    async function buscarCEP(){
        let r = await axios.get('https://viacep.com.br/ws/' + cep + '/json/');
        setResultadoCorreio(r.data.localidade + '- ' +  r.data.logradouro + '-' + r.data.uf)


    }
    async function buscarFilmes() {
        let r = await axios.get('http://www.omdbapi.com/?apikey=7ba44d29&s=' + filme);
        setResultadoFilmes(r.data.Search)
        
    }


    return (

        

        

        
        <div className='pagina-api'>
              
            <h1> Chamadas API</h1>

            <main>
                
             <img className='hulk' src='/assets/images/hulk.png' />
            <h2> Api dos Correios</h2>
            <div className='correio'>
                <label> CEP:</label>
                <input type='text' value={cep} onChange={e=> setCEP(e.target.value)}/>
                <button onClick={buscarCEP}>Buscar</button>
                <div> {resultadoCorreio} </div>
            </div>
            <hr></hr>

            
            <h2> Api Filmes</h2>
            

            <div className='filmes'>
            <label> FILME:</label>
                <input type='text' value={filme} onChange={e=> setFilme(e.target.value)}/>
                <button onClick={buscarFilmes}>Buscar</button>
                <div> {resultadoCorreio} </div>

            </div>
            <div className='lista-filmes'>
                {resultadoFilmes.map(item =>
                <div className='card-filme'>
                    <img src={item.Poster} />
                    <div> 
                        <h1> {item.Title}</h1>
                        <h3>{item.Year}</h3>
                        <h3>{item.Type}</h3>
             
                    </div>
                    
                </div>
                )}

            </div>
            
            

            </main>
        </div>

        
    )
}

   