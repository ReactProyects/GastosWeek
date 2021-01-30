import React, { useState } from 'react'


export const Formulario = React.memo(({save,citas}) => {
    console.log('Call form')
    const [campos, setCampos] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [errores, seterrores] = useState({})
    const [mensajeForm, setMensajeForm] = useState(false)
    const { mascota, propietario, fecha, hora, sintomas } = campos
    const inputChange = ({ target }) => {
        if (target.value.length === 0) {
            seterrores({
                ...errores,
                [target.name]: `El campo ${target.name} es obligatorio`
            })
        } else {
            if (Object.keys(errores).length > 0) {

                Object.filter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => (res[key] = obj[key], res), {});

                const filter = Object.filter(errores, err => err !== `El campo ${target.name} es obligatorio`);
                const filterSearch = Object.filter(errores, err => err === `El campo ${target.name} es obligatorio`);
                if (Object.keys(filterSearch).length === 1) {
                    seterrores(filter)
                }
            }
        }
        
        setCampos({
            ...campos,
            [target.name]: target.value
        });
    }

    const onSumbitForm=(e)=>{
       e.preventDefault();
        if(mascota==='' || propietario==='' || fecha==='' 
            || hora==='' || sintomas===''
        ){
           return  setMensajeForm(true);
       }
       setMensajeForm(false)
       save([
        
           {
               id:new Date().getTime(),
               mascota,
               propietario,
               fecha,
               hora,
               sintomas
           }
       ])
       setCampos({
        ...citas,
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
       })
       
    }
    return (
        <>
            <h2>Crear Cita</h2>
            {mensajeForm && <p  className="alerta-error">Los campos no pueden estar vacios</p>}
            {Object.keys(errores).length > 0 && Object.keys(errores).map(c => (
                <p key={c} className="alerta-error">{errores[c]}</p>
            ))}
            <form
        onSubmit={onSumbitForm}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    value={mascota}
                    onChange={inputChange}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre  Dueño de la mascota"
                    value={propietario}
                    onChange={inputChange}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    value={fecha}
                    onChange={inputChange}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    value={hora}
                    onChange={inputChange}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    value={sintomas}
                    onChange={inputChange}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </>
    )
})
