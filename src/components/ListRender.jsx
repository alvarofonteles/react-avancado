import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Alvaro', 'Lorena', 'Letícia'])

    /** com id */
    const [list2, setUsers] = useState([
        { id: 1, nome: 'Casa', valor: 365.874 },
        { id: 2, nome: 'Moto', valor: 53.821 }
    ])

    /** sem id */
    const [list3] = useState([
        { nome: 'Blusa' },
        { nome: 'Calsa' }
    ])

    const listItems = list.map(person => {
        const upper = person.toUpperCase()
        return <li key={person}>{upper}</li>
    })

    /** com id */
    /** const deleteRandom = () => {
        const numberRandom = Math.floor(Math.random() * 3)

        setUsers(prevList2 => prevList2.filter(item2 => numberRandom !== item2.id))
    }*/

    /** com id */
    const deleteRandom = () => {
        debugger
        const numberRandom = Math.floor(Math.random() * 3)
        console.log(numberRandom)
        setUsers(prevList2 => {
            console.log(prevList2)

            return prevList2.filter(item2 => numberRandom !== item2.id)
        })
    }

    return <>
        <div>
            {/** in-line */}
            <ul>
                {list.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>

            {/** com id */}
            <ul>
                {list2.map(item2 => (
                    <li key={item2.id}>{item2.nome} - {item2.valor}</li>
                ))}
            </ul>

            {/** sem id */}
            <ul>
                {list3.map((item3, id) => (
                    <li key={id}>{item3.nome}</li>
                ))}
            </ul>

            {/** externo */}
            <ul>
                {listItems}
            </ul>

            <div>
                <button onClick={deleteRandom} >Delete random objeto</button>
            </div>
        </div>
    </>
}

export default ListRender