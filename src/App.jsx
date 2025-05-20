import './App.css'
import Moto from './assets/moto.jpg'
import Moto2 from './assets/moto2.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {
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
        <ConditionalRender />
      </div>
    </>
  )
}

export default App
