import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from './icons';

const NavLinks: React.FC<{onLinkClick?: () => void}> = ({onLinkClick}) => {
    const activeLinkStyle = {
        textShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee',
        color: '#67e8f9',
    };

    const linkClasses = "relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-cyan-400 group";
    
    return (
        <>
            <NavLink to="/" className={linkClasses} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onLinkClick}>
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </NavLink>
            <NavLink to="/cctv" className={linkClasses} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onLinkClick}>
                CCTV
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </NavLink>
            <NavLink to="/pclaptop" className={linkClasses} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onLinkClick}>
                PC & Laptop
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </NavLink>
            <NavLink to="/contact" className={linkClasses} style={({ isActive }) => isActive ? activeLinkStyle : {}} onClick={onLinkClick}>
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </NavLink>
        </>
    );
};

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold font-orbitron text-white tracking-widest">
                            CYBER<span className="text-cyan-400">CORE</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/80 backdrop-blur-sm">
                    <NavLinks onLinkClick={() => setMobileMenuOpen(false)} />
                </div>
            </div>
        </header>
    );
};

export default Header;
