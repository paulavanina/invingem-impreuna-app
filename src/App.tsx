import { Route, Routes } from "react-router-dom"
import DespreNoi from "./pages/DespreNoi/DespreNoi"
import PovesteaMea from "./pages/PovesteaMea/PovesteaMea"
import Comunitate from "./pages/Comunitate/Comunitate"
import Inscriere from "./pages/Inscriere/Inscriere"
import Autentificare from "./pages/Autentificare/Autentificare"
function App() {
  return (
   <div> 
    <Routes>
      <Route path="/" element={<DespreNoi/>}/>
      <Route path="despre-noi" element={<DespreNoi/>}/>
      <Route path="povestea-mea" element={<PovesteaMea/>}/>
      <Route path="comunitate" element={<Comunitate/>}/>
      <Route path="logIn" element={<Autentificare/>}/>
      <Route path="signUp" element={<Inscriere/>}/>
    </Routes>
   </div>
  )
}

export default App
