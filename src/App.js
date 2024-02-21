import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Sales from './components/Sales';
import SalesTable from './components/SalesTable';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>

      <BrowserRouter>
        {/* <Login/> */}

        {/* <Sales/> */}


        <Routes>
          <Route path='/' element={<Login />}> </Route>
          <Route path='/dashboard' element={<Dashboard />}> </Route>
          <Route path='/product' element={<Product />}> </Route>
          <Route path='/sale' element={<Sales />}> </Route>
          <Route path='/saletable' element={<SalesTable />}> </Route>






      </Routes>

    </BrowserRouter >

    </>

  );
}

export default App;
