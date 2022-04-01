import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { firestore } from "./firebase";
import { useEffect } from 'react';
import HeaderLayout from '../src/components/layout/HeaderLayout'
import { useSelector } from 'react-redux'

const App = () => {
  const 데이터 = useSelector((state)=>state)
  useEffect(() => {
    console.log(firestore);
  });
  return (
    <div>
      <HeaderLayout />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home name={데이터}/>}  />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
