import './index.css'
import ReactDom from 'react-dom'
import React from 'react' // usada para importar a biblioteca react

import App from "./App"

ReactDom.render(
    // inicio da sintaxe JSX da biblioteca react
    <App/>,
    // fim da sintaxe JSX da biblioteca react
    document.getElementById('root')
)