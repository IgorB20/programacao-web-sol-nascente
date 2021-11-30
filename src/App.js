import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Condominios from './pages/Condominios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CondominioDetalhes from './pages/CondominioDetalhes';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Condominios />} />
          <Route path="/condominio/:id" element={<CondominioDetalhes/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
