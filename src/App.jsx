import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneraLayout from './pages/GeneraLayout';
import Home from './pages/Home';

const Categories = React.lazy(() => import('./pages/Categories/Categories'))
const ProductPage = React.lazy(() => import('./pages/Product/ProductPage'))
const Register = React.lazy(() => import('./Auth/Register'))
const Login = React.lazy(() => import('./Auth/Login'))

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route index element={<Home />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/products' element={<ProductPage />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
