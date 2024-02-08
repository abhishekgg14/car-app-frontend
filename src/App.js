import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCar from './components/AddCar';
import Nav from './components/Nav';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Nav/><AddCar/></>} />
          <Route path='/view' element={<><Nav/><View/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
