import React, { useState } from 'react'
import { Error } from './Error';

export const Question = React.memo(({save,hide,savePresupuesto}) => {

    const [monto, setMonto] = useState(0);
    const [mensaje, setMensaje] = useState(false)
  /*   const [isTest, setIsTest] = useState(false); */
    const agregarPresupuesto=(e)=>{
        e.preventDefault();
        const montoFinal=Number(monto)
        if(montoFinal<0 || isNaN(montoFinal) || montoFinal===0){
            return setMensaje(true);
        }
        setMensaje(false);
        hide(false)
        save(montoFinal);
      
    }
    
    return (
        <>
            <h2>Coloca tu presupuesto</h2>
           {/*  <button onClick={()=>setIsTest(!isTest)}>test</button> */}
            { mensaje && <Error mensaje="El Presupuesto es Incorrecto" />}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    value={monto}
                    onChange={({target})=>setMonto(target.value)}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    )
})
