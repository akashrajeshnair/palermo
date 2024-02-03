import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import { AboutUs, FindUs, Footer, Header, Laurels, SpecialMenu, Book, BookConfirm } from './container';
import { Navbar } from './components';
import './App.css';

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Header/>}></Route>
        <Route exact path="/about" element={<AboutUs/>}></Route>
        <Route exact path="/menu" element={<SpecialMenu/>}></Route>
        <Route exact path="/awards" element={<Laurels/>}></Route>
        <Route exact path="/contact" element={<FindUs/>}></Route>
        <Route exact path="/book" element={<Book/>}></Route>
        <Route exact path="/confirm" element={<BookConfirm/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;