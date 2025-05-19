import './App.css'
import Moto from './assets/moto.jpg'
import Moto2 from './assets/moto2.jpg'
import ManageData from './components/ManageData'

function App() {
  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>
        
        <ManageData />
        
        {/** imagem publica */}
        <div>
          <img src="/casa.jpg" alt="casa moderna" />
        </div>

        {/** imagem assets */}
        <div>
          <img src={Moto2} alt="moto moderna" />
        </div>
      </div>
    </>
  )
}

export default App
