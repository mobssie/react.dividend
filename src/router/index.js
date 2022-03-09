import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/about' elemtent={<About/>}/>
        {/* <Route exact path="/about" component={About} />
        <Route path="/" component={Home} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default index;