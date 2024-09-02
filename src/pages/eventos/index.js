import './index.scss';

import Cabecalho from '../../componentes/cabecalho';

export default function Eventos(){

    function clicou(){
        alert('Usuario clicou');
    }

    function mouseMoveu(){
        alert('moveu mouse');
    }

    function alterou(e){
        alert('usuario alterou o valor para: ' + e.target.value);
    }

    function alterou2(e){
        alert('usuario alterou o valor para: ' + e.target.checked);
    }

    return(
        <div className='pagina-eventos'>
            <Cabecalho></Cabecalho>
            <main>
            <h1>Eventos</h1>
            <h2>onclick</h2>
            <button onClick={clicou}> Clicar</button>

            <hr>
            </hr>

            <h2>onMouse</h2>
            <img onMouseEnter={mouseMoveu} src='/assets/images/hulk.png' />

            <hr></hr>
            <h2> onchange</h2>
            <input onChange={alterou} type='text'/>
            <br></br>
            <input onChange={alterou2} type='checkbox'/>Opçao

            </main>
           
        </div>
        
    )
}