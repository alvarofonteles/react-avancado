import { useState } from "react"

const ConditionalRender = (valor) => {
    const [x] = useState(true)

    const [name, setName] = useState('Deus')

    return <>
        <div>
            <h2>Isso será exibido</h2>
            {x && <p>Se [x] for true, Sim!</p>}

            <h2>If Ternário</h2>
            {/** sem bloco */}
            {x ? <p>Se [x] for true, Sim!!!</p> : <p>Se [x] for false, Não!!!</p>}

            {/** com bloco */}
            {name === valor.name ? (
                <div>
                    <p>O nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado! [setName: {name}]</p>
                </div>
            )}
            <button onClick={() => { setName('Alvaro') }}>Clique Aqui</button>
            <div>
                <ul>
                    <li>Nome: {valor.name}</li>
                    <li>Idade: {valor.age}</li>
                </ul>
            </div>
        </div>
    </>

}

export default ConditionalRender