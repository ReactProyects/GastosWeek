import React from 'react'
import { Gasto } from './Gasto'

export const Listado = React.memo(({gastos}) => {
   console.log('Call listado')
    return (
        <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
    )
})
