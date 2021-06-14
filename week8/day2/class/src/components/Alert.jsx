import React from 'react'
import PropTypes from 'prop-types'


const Alert = (prop) => {
    const { text, show, color } = prop

    
let result 

    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    };
    if (show) {
          result = color === colorClasses.red ? 'alert alert-danger' : color === colorClasses.orange ? 'alert alert-warning' :  color === colorClasses.green?' alert alert-success':
       result =  false
    
        if (!result) return alert('error')

        return (
            <div class={result} role="alert">
                {text}
            </div>
        )
    }
    return null

}


Alert.propTypes = {
    title: PropTypes.string
};
export default Alert;
