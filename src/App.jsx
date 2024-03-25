import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Views/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Personas from "./Views/Personas/Personas"
import Retiro from "./Views/Retiro/Retiro"
import Empresas from "./Views/Empresas/Empresas"
import PlanFuturo from "./Views/Retiro/Planes/PlanFuturo/PlanFuturo"
import PlanProyecto from "./Views/Retiro/Planes/PlanProyecto/PlanProyecto"
import PlanInversorGold from "./Views/Retiro/Planes/PlanInversorGold/PlanInversorGold"
import Footer from "./Components/Footer/Footer"
import DetailPersonas from "./Views/Personas/DetailPersonas/DetailPersonas"
import DetailAutomotores from "./Views/Personas/DetailPersonas/DetailAutomotores"
import DetailEmpresasAutomotores from "./Views/Empresas/DetailEmpresas/DetailEmpresasAutomotores"
import DetailEmpresas from "./Views/Empresas/DetailEmpresas/DetailEmpresas"
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton"


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/personas" element={<Personas/>}/>
        <Route path="/personas/vehiculos/:target" element={<DetailAutomotores/>}/>
        <Route path="/personas/:target" element={<DetailPersonas/>}/>
        <Route path="/empresas/vehiculos/:target" element={<DetailEmpresasAutomotores/>}/>
        <Route path="/empresas/:target" element={<DetailEmpresas/>}/>
        <Route path="/retiro" element={<Retiro/>}/>
        <Route path="/retiro/plan-futuro" element={<PlanFuturo/>}/>
        <Route path="/retiro/plan-proyecto" element={<PlanProyecto/>}/>
        <Route path="/retiro/plan-inversor-gold" element={<PlanInversorGold/>}/>
        <Route path="/empresas" element={<Empresas/>}/>
      </Routes>
      <WhatsappButton/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
