

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import { Route, Routes } from 'react-router-dom';
import Reservations from './Reservations';
import Contact from './Contact';

export default function  Main()
{
    return(
        <>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
    
}