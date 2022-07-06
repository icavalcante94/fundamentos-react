import './index.css'
import ReactDom from 'react-dom'
import React from 'react' // usada para importar a biblioteca react

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDom.render(
    // inicio da sintaxe JSX da biblioteca react
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo = "Situação do Aluno"
            aluno = "Pedro Silva"
            nota = {9.5} //maneira correta de envio de número
        />{/* maneira simplificada de fechar a tag personalizada */}
        <Fragmento/>
    </div>,
    // fim da sintaxe JSX da biblioteca react
    document.getElementById('root')
)