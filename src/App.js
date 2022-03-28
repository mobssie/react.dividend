import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import { firestore } from "./firebase";
import { useEffect } from 'react';
import HeaderLayout from '../src/components/layout/HeaderLayout'
const isLogin = false;


const App = () => {
  useEffect(() => {
    console.log(firestore);
  });
  return (
    <div>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
