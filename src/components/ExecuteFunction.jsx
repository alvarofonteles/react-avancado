import React from 'react'

const ExecuteFunction = ({ myFunction, myFunction2 }) => {
    return (
        <>
            <button onClick={() => myFunction(33)}>Exc Function</button>
            <button onClick={myFunction2}>Exc Function 2</button>
        </>
    )
}

export default ExecuteFunction