import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderSummary from './pages/summary/OrderSummary';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OrderSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
