import './index.scss'
import { useState } from 'react';

export default function Renderizacao(){
    const[exibir, setExibir] = useState(false);
    const[exibirModal, setExibirModal] = useState(false);

    function mostrarBiscoito(){
        setExibir(!exibir);

    }
    function abrirFecharModal(){
        setExibirModal(!exibirModal)
    }


    return(
        <div className='pagina-renderizacao'>
            <h1> Renderização</h1>
            <main>
                <h2>Biscoito Sorte</h2>

                <button onClick={abrirFecharModal} > abrir modal  </button>

                <button onClick={mostrarBiscoito}>
                    {exibir == false ? 'Abrir' : 'Fechar'}
                </button>


                {exibir == true && 
                 
                <div className='brinde'>
                <img src='https://img.freepik.com/fotos-gratis/vista-do-carro-3d_23-2150796894.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph' />
                    <h3> Parabens vc ganhou carro</h3>
                    <p> Lindo Premio!</p>
                </div>
                }
               
            </main>

            {exibirModal == true &&
            <div className='modal'>
                <div>
                    <i onClick={abrirFecharModal} className=' fechar fa fa-xmark'></i>
          
                    <h1> Alan Campos Silva</h1>
                    <p> Graduado em Sistemas para Internet, voltado para desenvolvimento web, mobile , em React, ReactNative
                        PHP, ApiRest.

                    </p>
                </div>
            </div>
            }

        </div>
    )
}