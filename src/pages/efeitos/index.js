
import './index.scss'

import { useEffect, useState } from 'react';

export default function Efeitos(){
    const [num, setNum] = useState('');
    const [res, setRes] = useState(0);

    function dobro(){
        setRes(num * 2);
    }

    useEffect(() =>{
        dobro();

    }, [num])

    //useEffect(() =>{
      //  alert('Novo dobro');

    //}, [res])

    useEffect(() =>{
        alert('ola');
    },[])

    return(
        <div className='Efeitos'> 
            <h1>Efeitos</h1>
            <main>
                <div>
                Numero:<input type='text' value={num} onChange={e => setNum(e.target.value)} />

                </div>
                <div>
                O dobro é: {res}

                </div>
               {/* <div>
                    <button onClick={dobro}> Dobro</button>
    </div> */}
               

            </main>

        </div>
    )
}

    

    