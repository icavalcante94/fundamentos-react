import './index.css'
import ReactDom from 'react-dom'
import React from 'react' // usada para importar a biblioteca react

import Primeiro from './components/basicos/Primeiro'

const tag =  "Olá React !!"

ReactDom.render(
    // inicio da sintaxe JSX da biblioteca react
    <div>
        { tag }
        <Primeiro></Primeiro>
    </div>,
    // fim da sintaxe JSX da biblioteca react
    document.getElementById('root')
)