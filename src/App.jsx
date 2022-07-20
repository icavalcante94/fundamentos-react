import "./App.css"
import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo = "#04 - Desafio Número Aleatório" color="#F4A460">
                <Aleatorio 
                    min = {2}
                    max = {8}
                />
            </Card>

            <Card titulo = "#03 - Fragmento" color="#CD5C5C">
                <Fragmento/>
            </Card>
            
            <Card titulo = "#02 - Com Parâmetro" color="#5F9EA0">
                <ComParametro 
                    titulo = "Situação do Aluno"
                    aluno = "Pedro Silva"
                    nota = {9.5} //maneira correta de envio de número
                />{/* maneira simplificada de fechar a tag personalizada */}
            </Card>
            
            <Card titulo = "#01 - Primeiro Componente" color="#3CB371">
                <Primeiro></Primeiro>
            </Card>
        </div>
        
        
    </div>
)