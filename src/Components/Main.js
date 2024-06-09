

import About from "./About";
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import Service from "./service";
import Menu from "./Menu";
import { Booking } from "./pages/Booking";
import { Team } from "./pages/Team";
import { Testimonial } from "./pages/Testimonial";
import Contact from "./Contact";
import Reservations from "./Reservations";



export default function  Main()
{
    return(
        <>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/bookings" element={<Booking />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
    
}