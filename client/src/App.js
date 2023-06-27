import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Getitout from './components/pages/Getitout';
import Detach from './components/pages/Detach';
import Loader from './components/Loader';
import { motion, AnimatePresence } from "framer-motion"
// import { PostList } from './components/PostLists';
// import { PostProvider } from './contexts/PostContext';
// import { Post } from './components/Post';

function App() {

  //to locate each page for fade-in effect
  const location = useLocation();

  //loading spinner
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 150)
    }, [])

  return (
    <>
      {
        loading?
        <Loader />
        :
        <>
          <Navbar />
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='/' exact element={<Home />} />
              <Route path='/*' element={<Getitout />} />
              <Route path='/detach' element={<Detach />} />
            </Routes>
          </AnimatePresence>
        </>
      }
    </>
  );
}

export default App;
