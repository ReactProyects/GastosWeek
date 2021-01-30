import React from 'react'
import PropTypes from 'prop-types';
export const Error = React.memo(({mensaje}) => {
    console.log('Call Error Screen')
    return (
        <p className="alert alert-danger error"> {mensaje} </p>
    )
})

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

