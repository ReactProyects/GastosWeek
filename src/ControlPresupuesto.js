import React, { useEffect, useState } from 'react'

export const ControlPresupuesto = React.memo(({presupuesto,gastos}) => {
  
    const [restante, setRestante] = useState(presupuesto)
    const [estado, setEstado] = useState('success');
    
   useEffect(() => {
    const calulculoGasto = () => {
        if (gastos.length > 0) {
            const totalGasto = gastos.reduce((total, g) => total + Number(g.cantidad), 0);
            const status = Math.floor(Number(presupuesto) / 2);
            const statusFour = Math.floor(Number(presupuesto) / 4);
            const restanteTotal = presupuesto - totalGasto;
            setRestante(restanteTotal)
            if (status > restanteTotal && restanteTotal>statusFour) {
                return setEstado('warning')
            }
         
            if (statusFour > restanteTotal) {
                return setEstado('danger') 
            }

        }
    }
    calulculoGasto();
   }, [gastos,presupuesto])

   //if use file helper for function , so use callback and linten changes of gastos
   
   return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={`alert alert-${estado}`}>
                Restante: $ {restante}
            </div>
        </>
    )
})
