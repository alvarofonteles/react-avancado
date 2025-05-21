import React from 'react'

const Container = ({ children, myCode }) => {
    return (
        <>
            <div>Container</div>
            {children}
            <p>aqui meu codigo: {myCode}</p>
        </>
    )
}

export default Container