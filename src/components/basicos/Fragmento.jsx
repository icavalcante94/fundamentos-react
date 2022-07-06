import React from "react"

export default function Fragmento(){
    return(
        //alternativa caso não queira usar uma tag especifica, como <div>, para envolver mais de um elemento
        /* <React.Fragment tag = "X">
             <h2>Fragmento</h2>
             <p>Cuidado com esse erro!</p>
         </React.Fragment>
         com React.Fragment podemos ter propriedade na tag personalizada
         */
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </>
    )
}