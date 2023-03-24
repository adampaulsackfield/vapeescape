import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

// Components
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';

// Containers
import ShopContainer from './containers/ShopContainer/ShopContainer';

// Context
import { BasketContext } from './context/BasketContext';

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <div className='App'>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<ShopContainer />} />

            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>

        <ToastContainer
          position='top-right'
          closeOnClick
          pauseOnHover
          theme='dark'
        />
      </div>
    </BasketContext.Provider>
  );
}

export default App;
