import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./contexts"
import Home from './pages/Home';
import LotoFacil from "./components/LotoFacil";
import MegaSena from "./components/MegaSena";
import Quina from "./components/Quina";

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Home />}></Route>
          <Route path="/lotofacil" element={<LotoFacil />}></Route>
          <Route path="/megasena" element={<MegaSena />}></Route>
          <Route path="/quina" element={<Quina />}></Route>
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
