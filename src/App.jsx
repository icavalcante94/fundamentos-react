import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"

export default () => (
    <div>
        <Aleatorio 
            min = {2}
            max = {8}
        />
        <Fragmento/>
        <ComParametro 
            titulo = "Situação do Aluno"
            aluno = "Pedro Silva"
            nota = {9.5} //maneira correta de envio de número
        />{/* maneira simplificada de fechar a tag personalizada */}
        <Primeiro></Primeiro>
    </div>
)