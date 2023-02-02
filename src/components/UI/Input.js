import React from "react";

function Input(props) {
    return <div className="form__field">
        <input className="form__field-input" {...props} placeholder=" "/>
        <label htmlFor={props.id} className="form__field-label">{props.placeholder}</label>
    </div>
}

export default Input