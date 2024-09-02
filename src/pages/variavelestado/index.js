import { useState } from 'react';
import './index.scss';

import Contador from '../../componentes/contador';
import Cabecalho from '../../componentes/cabecalho';

export default function ExemplosdeUso(){

    const [tarefas, setTarefas] = useState(['Estudar', 'PTI' ,'Estagio']);
    const[item, setItem] = useState('');

    const [valor, setValor] = useState(0);
    const [qtd, setQtd] = useState(0);
    const [meia, setMeia] = useState(false);
    const[total, setTotal] = useState(0);




    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [soma, setSoma] = useState(0);


    function alterouN1(e) {
        setNumero1(e.target.value);
        
    }
    function alterouN2(e) {
        setNumero2(e.target.value);
        
    }

    function Somar(){
        setSoma(Number(numero1) + Number(numero2));
    }

    function calcular(){
        if (meia == true)
        setTotal(valor / 2 * qtd);
    else
    setTotal(valor * qtd);
    }

    function adicionarItem(){
       
        setTarefas([...tarefas, item])
    }

    


    

let titulo = 'ola , tudo bem'

    return(
        <div className='pagina-variavel-estado'>
            <Cabecalho></Cabecalho>
            <h1> Variavel de Estado</h1>
            <h3>{titulo}</h3>

            <hr></hr>



<Contador titulo="Contador de Passos"/>

<Contador titulo="Contador de Erros"/>

<Contador titulo="Contador de Historia"/>


            

<hr></hr>

<h2>Calculadora</h2>
Número 01: <input type='text' onChange={alterouN1} value={numero1} />
<br></br> <br></br>
Número 02: <input type='text'  onChange={alterouN2} value={numero2}/>
<br></br> <br></br>

<div>{soma}</div>

<button onClick={Somar}>Somar</button>

<hr>

</hr>

<h2> Venda Ingresso</h2>

Valor: <input type='text' onChange={(e) => setValor(e.target.value)}/>
<br></br>
Qtd: <input type='text' onChange={(e) => setQtd(e.target.value)} />

<br></br>
Meia: <input type='checkbox' onChange={(e) => setMeia(e.target.checked)} />

<br></br>

<div> R$ {total}</div>

<button onClick={calcular}>Calcular</button>

<hr>
</hr>

<h2> Tarefas</h2>
<input type='text' onChange={(e) => setItem(e.target.value)}/>
<button onClick={adicionarItem}> Adicionar</button>
{tarefas.map(item =>
<li>{item}</li>
    )}




        </div>

        
        
    )
}