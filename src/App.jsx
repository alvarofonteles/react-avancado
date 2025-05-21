import { useState } from 'react'
import './App.css'
import Moto from './assets/moto.jpg'
import Moto2 from './assets/moto2.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import CarDetails from './components/CarDetails'
import Container from './components/container'
import ExecuteFunction from './components/ExecuteFunction'
import Msg from './components/Msg'
import AlteraMsg from './components/AlteraMsg'

function App() {
  // const name = 'Deus'
  const [userName] = useState('Deus')

  const cars = [
    { id: 1, names: "Argo", cor: "Branco", valor: 1000, km: 98745, newCar: false },
    { id: 2, names: "Onix", cor: "Vermelho", valor: 784, km: 0, newCar: true },
    { id: 3, names: 'SWV', cor: 'Azul', valor: 10000, km: 10, newCar: false }
  ]

  function myFunc(x) {
    console.log('Show: myFunc, valor: ' + x)
  }

  const myFunc2 = () => {
    console.log('Show: myFunc 2')
  }

  const [name, setName] = useState('')

  const stNm = (m) => setName(m)

  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>

        <ManageData />

        {/** imagem publica */}
        <div>
          <img src="/casa.jpg" alt="casa moderna" style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        {/** imagem assets */}
        <div>
          <img src={Moto2} alt="moto moderna" style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        <ListRender />
        <ConditionalRender name={userName} age={30} />

        <h3>Fixo</h3>
        <CarDetails names={"Fiat 147"} cor={"Vermelho"} valor={1000} km={98745} newCar={false} />

        <CarDetails names={'Fusca Itamar'} cor={'Branco'} valor={985} km={0} newCar={true} />
        <CarDetails names={'Corola'} cor={'Preto'} valor={1850} km={4570} newCar={false} />

        <h3>Loop</h3>
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            names={car.id + '. ' + car.names}
            cor={'Amarelo'}
            valor={car.valor}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

        <Container myCode={'<br />'}>
          <p>Conteudo dentro do componente no Pai - [default(children)]</p>
        </Container>

        <Container myCode={'<p />'}>
          <p>Segundo componente no Pai</p>
        </Container>

        <ExecuteFunction myFunction={myFunc} myFunction2={myFunc2} />

        <Msg msg={name} />
        <AlteraMsg stNm={stNm} />
      </div>
    </>
  )
}

export default App
