import React from "react"

const Square = ({value, onSquareClick}) => {

    return (
        <button className="flex border border-white p-2 w-full h-auto items-center justify-center text-4xl rounded-lg shadow-lg text-white" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square