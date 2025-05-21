import React from 'react'

const AlteraMsg = ({ stNm }) => {

    const valorAlterado = ['Oi', 'Olá', 'Tudo Bem']

    return (
        <>
            <button onClick={() => stNm(valorAlterado[0])} >1</button>
            <button onClick={() => stNm(valorAlterado[1])} >2</button>
            <button onClick={() => stNm(valorAlterado[2])} >3</button>
        </>
    )
}

export default AlteraMsg