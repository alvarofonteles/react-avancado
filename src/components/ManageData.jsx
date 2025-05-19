import { useState } from "react"

const ManageData = () => {
    let someDate = 10
    console.log(someDate)

    const [number, setNumber] = useState(15)
    console.log(number)

    return (
        <>
            <div>ManageData</div>
            <div>
                <p>Valor: {someDate}</p>
                <button onClick={() => someDate = 15} >Mudar Variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)} >Mudar State</button>
            </div>
        </>
    )
}

export default ManageData