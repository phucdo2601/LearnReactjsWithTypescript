import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/homePage' element={<Home />} />
                <Route path='/about'>
                  <Route index element={<About />} />
                  <Route path=':number' element={<About />} />
                </Route>
                <Route path='/layout' element={<Layout />} >
                  <Route index element={<About />} />
                  <Route path=':number' element={<About />} />
                </Route>
                <Route path='/test' element={<Test />} />

            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
