import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import { firestore } from "./firebase";
import { useEffect } from 'react';



const App = () => {
  useEffect(() => {
    console.log(firestore);
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;