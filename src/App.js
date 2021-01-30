import React, { useCallback, useState } from 'react'
import { ControlPresupuesto } from './ControlPresupuesto';
import { Formulario } from './Formulario';
import { Listado } from './Listado';
import { Question } from './Question'

export const App = () => {

    const [presupuesto, setPresupuesto] = useState(0);
  /*   const [isTest, setIsTest] = useState(false); */
    const [isForm, setIsForm] = useState(true)
    const [gastos, setGastos] = useState([]);
     
    const guardarGasto =useCallback(
        (data) => {
            setGastos([
                ...gastos,
                data
            ])
        },
        [gastos],
    )

    
    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
         {/*    <button onClick={()=>setIsTest(!isTest)}>test</button> */}
                <div className="contenido-principal contenido">
                    {isForm ?
                        (
                            <Question
                                save={setPresupuesto}
                               
                                hide={setIsForm}
                            />
                        ) : (
                            <div className="row">
                                <div className="one-half column">

                                    <Formulario
                                        save={guardarGasto}
                                    />
                                </div>

                                <div className="one-half column">
                                    {gastos.length>0 && <Listado
                                        gastos={gastos}
                                    />}


                                    <ControlPresupuesto
                                        presupuesto={presupuesto}
                                        gastos={gastos}
                                        
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </header>
        </div>
    )
}
