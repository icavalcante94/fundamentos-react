import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => (
    <div>
        <Fragmento/>
        <ComParametro 
            titulo = "Situação do Aluno"
            aluno = "Pedro Silva"
            nota = {9.5} //maneira correta de envio de número
        />{/* maneira simplificada de fechar a tag personalizada */}
        <Primeiro></Primeiro>
    </div>
)