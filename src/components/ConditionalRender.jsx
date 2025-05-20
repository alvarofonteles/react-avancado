import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState('Lorena')

    return <>
        <div>
            <h2>Isso será exibido</h2>
            {x && <p>Se [x] for true, Sim!</p>}

            <h2>If Ternário</h2>
            {/** sem bloco */}
            {x ? <p>Se [x] for true, Sim!!!</p> : <p>Se [x] for false, Não!!!</p>}

            {/** com bloco */}
            {name === 'Alvaro' ? (
                <div>
                    <p>O nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => { setName('Alvaro') }}>Clique Aqui</button>
        </div>
    </>

}

export default ConditionalRender