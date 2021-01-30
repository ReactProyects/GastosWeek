import React, { useState } from 'react'

export const Formulario = React.memo(({save}) => {
    const [gasto, setGasto] = useState({
        nombre:'',
        cantidad:''
    });
    const {nombre,cantidad}=gasto
    const InputChange=({target})=>{
        setGasto({
            ...gasto,
            [target.name]:target.value
        })
    }

    const agregarGasto=(e)=>{
        e.preventDefault();
        setGasto({
            nombre:'',
            cantidad:''
        })
        save({...gasto,id:new Date().getTime()});
    }


    return (
        <form
           onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {/*    { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null }
 */}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    name="nombre"
                   onChange={InputChange}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    name="cantidad"
                    value={cantidad}
                    onChange={InputChange}
                     
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    )
})
