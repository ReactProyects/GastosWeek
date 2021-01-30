import React, { useCallback, useState } from 'react'
import { Cita } from './Cita'
import { Formulario } from './Formulario'

export const Citas = () => {
    const [citas, setCitas] = useState([]);
  

    const eliminarCita= useCallback(
        (id) => {
            const removeFilter=citas.filter(cita=>cita.id!==id);
            setCitas(removeFilter);
        },
        [citas],
    )


    return (
        <>
        <h1>Administrador de Pacientes</h1>
     
        <div className="container">
          <div className="row">
            <div className="one-half column">
                <Formulario 
                save={setCitas}
                citas={citas}
                />
            </div>
            <div className="one-half column">
                {citas.length===0 &&  <h2>No tienes citas pendiente</h2> } 
                {citas.map(cita => (
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                 ))} 
            </div>
          </div>
        </div>
      </>
    )
}
