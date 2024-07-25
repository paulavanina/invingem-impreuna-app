import { Route, Routes } from "react-router-dom"
import DespreNoi from "./pages/DespreNoi/DespreNoi"
import Resurse from "./pages/Resurse/Resurse"
import PovesteaMea from "./pages/PovesteaMea/PovesteaMea"
import Comunitate from "./pages/Comunitate/Comunitate"

function App() {
  return (
   <div>    
    <Routes>
      <Route path="/" element={<DespreNoi/>}/>
      <Route path="despre-noi" element={<DespreNoi/>}/>
      <Route path="resurse" element={<Resurse/>}/>
      <Route path="povestea-mea" element={<PovesteaMea/>}/>
      <Route path="comunitate" element={<Comunitate/>}/>
    </Routes>
   </div>
  )
}

export default App
