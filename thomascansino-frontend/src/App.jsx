import { useState } from 'react'
import Header from './Header.jsx'
import NavModal from './NavModal.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
    
    const [ isNavModalOpen, setIsNavModalOpen ] = useState(false);

    const openNavModal = () => {
        setIsNavModalOpen(true);
        document.body.classList.add('nav-blocked');
    };

    const closeNavModal = () => {
        setIsNavModalOpen(false);
        document.body.classList.remove('nav-blocked');
    };

    return (
        <>
            <Header openNavModal={openNavModal} />
            {isNavModalOpen && <NavModal closeNavModal={closeNavModal} />}
            <Home />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
};

export default App;