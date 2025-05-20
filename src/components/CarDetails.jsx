const CarDetails = ({ names, cor, valor, km, newCar }) => {
    return (
        <>
            <div>
                <ul>
                    <li>Nome: {names}</li>
                    <li>Cor: {cor}</li>
                    <li>Valor: {valor}</li>
                    <li>Km: {km}</li>
                </ul>
            </div>

            {newCar && <p>Esse [{names}] é muito novo. <br />Kilometragem: {km}km.</p>}
        </>
    )
}

export default CarDetails