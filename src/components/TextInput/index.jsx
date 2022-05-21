import React from "react";

export default function TextInput({ handleChange, searchValue }) {
    return (
        <input
            type={'search'}
            onChange={handleChange}
            value={searchValue}
        />
    )
}