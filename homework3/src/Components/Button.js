import React from 'react'

function Button(props) {
    return (
        <button onClick={props.onClick()}>
            {props.buttonType}
        </button>
    )
}

export default Button
