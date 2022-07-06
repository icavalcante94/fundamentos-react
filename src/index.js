import './index.css'
import ReactDom from 'react-dom'
import React from 'react' // usada para importar a biblioteca react

import Primeiro from './components/basicos/Primeiro'

ReactDom.render(
    // inicio da sintaxe JSX da biblioteca react
    <div>
        <Primeiro></Primeiro>
    </div>,
    // fim da sintaxe JSX da biblioteca react
    document.getElementById('root')
)