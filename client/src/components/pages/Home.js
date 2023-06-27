import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Getitout from './Getitout';
import Detach from './Detach';
import { motion, AnimatePresence } from "framer-motion"
// import Cards from '../Cards';
// import Footer from '../Footer';

function Home (isVisible) {
    return (
        <>
        <AnimatePresence>
            {isVisible && (
                <motion.div initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity: 0}}>
                    <HeroSection />
                    <Getitout />
                    <Detach />
                    {/* <Cards /> */}
                    {/* <Footer /> */}
                </motion.div>
            )}
        </AnimatePresence>
            
        </>
    )
}

export default Home;