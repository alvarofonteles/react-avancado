import React, { useState } from 'react'

const AlteraMsg = ({ stNm }) => {

    const valorAlterado = ['Oi', 'Olá', 'Tudo Bem']
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <button onClick={() => stNm(valorAlterado[0])} >1</button>
            <button onClick={() => stNm(valorAlterado[1])} >2</button>
            <button onClick={() => stNm(valorAlterado[2])} >3</button>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') stNm(inputValue);
                }}
            />

            <p />

            <button onClick={() => stNm(inputValue)} >Enter</button>
            <p>Nome alterado: {inputValue}</p>
        </>
    )
}

export default AlteraMsg