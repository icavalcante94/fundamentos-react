import React from 'react' //bibioteca necessária para adicionar o JSX

export default function Primeiro() {
    const msg = "Seja Bem Vindo(a)!!"
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p> { msg } </p>
        </div> //adicionado o JSX
    ) //usando estrutura de retorno com vários elementos a serem retornados
}