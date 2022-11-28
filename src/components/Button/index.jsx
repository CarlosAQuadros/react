import React from "react";
import './styles.css'


export default function Button({onClick, text,disabled}) {



    return (
        <button 
        className="button"
        disabled={disabled}
        onClick={onClick}
        >{text}</button>
    )

}