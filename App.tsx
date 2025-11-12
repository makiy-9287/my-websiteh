import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cctv from './pages/Cctv';
import PcLaptop from './pages/PcLaptop';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
};

const Main: React.FC = () => {
    const location = useLocation();
    
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
            {/* Animated background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-xy"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(10,10,25,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,25,0.95) 1px, transparent 1px)`,
                        backgroundSize: '2rem 2rem',
                        animation: 'grid-pan 60s linear infinite'
                    }}
                ></div>

            </div>
            
            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }

                @keyframes gradient-xy {
                    0%, 100% { background-size: 400% 400%; background-position: 0% 50%; }
                    50% { background-size: 200% 200%; background-position: 100% 50%; }
                }
                .animate-gradient-xy {
                    animation: gradient-xy 15s ease infinite;
                }

                @keyframes grid-pan {
                    0% { background-position: 0 0; }
                    100% { background-position: 2rem 2rem; }
                }
            `}</style>

            <Header />
            <main className="pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cctv" element={<Cctv />} />
                    <Route path="/pclaptop" element={<PcLaptop />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
