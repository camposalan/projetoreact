import './index.scss'

import Nitro from '../../componentes/nitro'

export default function Discord(){

    return(
        <div className='pagina-discord'>
            <h1> Vantagem Nitro Popular</h1>
            <div className='itens'>
                <Nitro titulo="Faça transmissões de aplicativos e jogos em HD" 
                imagem="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e745e5817574c745fcc0_Stream%20apps.svg" />

                <Nitro titulo="De clipes a fotos, compartilhe à vontade com uploads maiores" 
                imagem="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8f1d5429528ae89f64cf0_Clips%20to%20pics.svg" />

                              
               
            </div>
            <div className='itens1'>
                <Nitro titulo="Aumente a empolgação e faça memes com emojis personalizados onde quiser" 
                imagem="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a8e7682eab54a3196def6e_Project-Speedy-Emoji-Static.svg" />
                
                <Nitro titulo="Desbloqueie vantagens para suas comunidades com 2 Impulsos de Servidor" 
                imagem="https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534f1f0854923a8e9c1_Frame%20881.svg" />
                              
               
            </div>

        </div>
    )
}