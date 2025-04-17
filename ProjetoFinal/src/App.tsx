import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/Productpage';
import ProductDetails from './pages/ProductDetails';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/productpage" element={<ProductPage />}></Route>
          <Route path="/productpage:productdetails" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
