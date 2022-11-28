import React from "react";

export  function TextInput({ handleChange, searchValue }) {
    return (
        <input
            type={'search'}
            onChange={handleChange}
            value={searchValue}
        />
    )
}