import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCar from './components/AddCar';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Nav/><AddCar/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
