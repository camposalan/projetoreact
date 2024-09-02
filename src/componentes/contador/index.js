import './index.scss'

import { useState } from 'react';


export default function Contador(props){

     
    const[contador, setContador] = useState(1);
    //let contador = 1;
    

    function aumentar(){
        //contador = contador + 1;
        //alert(contador);

        setContador(contador + 1);
        
    }
    function diminuir(){
        if(contador > 0)
        setContador(contador - 1);
    }





    return(
        <div className='comp-contador'>
            <h2>{props.titulo}</h2>

            <div className='cont'>{contador}
            <br></br>


            </div>
            <br></br>
            <button onClick={aumentar}>Aumentar</button>
            <br/>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
}
