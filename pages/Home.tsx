import React from 'react';
import { Link } from 'react-router-dom';
import { CctvIcon, LaptopIcon, ShieldCheckIcon, CogIcon, ClockIcon } from '../components/icons';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-orbitron tracking-tighter text-white animate-fade-in-down">
                    Digital Solutions, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Reimagined.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 animate-fade-in-up animation-delay-300">
                    Expert IT services tailored for modern security and performance needs. From crystal-clear CCTV installations to high-performance PC & Laptop solutions, I deliver reliability and excellence.
                </p>
                <div className="mt-10 animate-fade-in-up animation-delay-600">
                    <Link
                        to="/contact"
                        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-cyan-300 transition duration-300 ease-out border-2 border-cyan-500 rounded-lg shadow-md group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/20 to-transparent opacity-50 h-1/3"></span>
                        <span className="relative">Get a Free Quote</span>
                    </Link>
                </div>
            </section>

            <section className="mt-24">
                <h2 className="text-3xl font-bold text-center font-orbitron animate-fade-in animation-delay-900">Core Services</h2>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* CCTV Card */}
                    <Link to="/cctv" className="block group animate-fade-in-left animation-delay-1200">
                        <div className="h-full p-8 rounded-2xl bg-black/30 border border-cyan-500/20 shadow-lg shadow-cyan-900/50 transition-all duration-300 group-hover:border-cyan-400 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/30">
                            <CctvIcon className="h-10 w-10 text-cyan-400" />
                            <h3 className="mt-4 text-2xl font-bold font-orbitron">CCTV Systems</h3>
                            <p className="mt-2 text-gray-400">Professional surveillance solutions for homes and businesses. High-definition, reliable, and accessible from anywhere.</p>
                            <span className="mt-4 inline-block text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform duration-300">Learn More &rarr;</span>
                        </div>
                    </Link>
                    {/* PC & Laptop Card */}
                    <Link to="/pclaptop" className="block group animate-fade-in-right animation-delay-1200">
                        <div className="h-full p-8 rounded-2xl bg-black/30 border border-purple-500/20 shadow-lg shadow-purple-900/50 transition-all duration-300 group-hover:border-purple-400 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/30">
                            <LaptopIcon className="h-10 w-10 text-purple-400" />
                            <h3 className="mt-4 text-2xl font-bold font-orbitron">PC & Laptop Services</h3>
                            <p className="mt-2 text-gray-400">From custom builds to critical repairs and data recovery, I ensure your devices run at peak performance.</p>
                            <span className="mt-4 inline-block text-purple-400 font-semibold group-hover:translate-x-1 transition-transform duration-300">Learn More &rarr;</span>
                        </div>
                    </Link>
                </div>
            </section>
            
            <section className="mt-24 text-center">
                 <h2 className="text-3xl font-bold font-orbitron">Why Choose Me?</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    A commitment to quality, reliability, and personalized service.
                </p>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <div className="p-6 bg-black/20 rounded-lg border border-white/10">
                        <ShieldCheckIcon className="h-10 w-10 text-cyan-400 mx-auto" />
                        <h3 className="mt-4 text-xl font-bold font-orbitron">Certified Expertise</h3>
                        <p className="mt-2 text-gray-400">Professional, certified technician ensuring top-quality installation and service every time.</p>
                    </div>
                     <div className="p-6 bg-black/20 rounded-lg border border-white/10">
                        <CogIcon className="h-10 w-10 text-purple-400 mx-auto" />
                        <h3 className="mt-4 text-xl font-bold font-orbitron">Custom Solutions</h3>
                        <p className="mt-2 text-gray-400">Solutions tailored to your exact needs, whether for home security or a high-performance gaming rig.</p>
                    </div>
                     <div className="p-6 bg-black/20 rounded-lg border border-white/10">
                        <ClockIcon className="h-10 w-10 text-pink-400 mx-auto" />
                        <h3 className="mt-4 text-xl font-bold font-orbitron">Reliable Support</h3>
                        <p className="mt-2 text-gray-400">Ongoing support and maintenance to keep your systems running smoothly and securely.</p>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
                @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-left { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
                @keyframes fade-in-right { 0% { opacity: 0; transform: translateX(20px); } 100% { opacity: 1; transform: translateX(0); } }
                .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; opacity: 0; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
                .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; opacity: 0; }
                .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; opacity: 0; }
                .animation-delay-300 { animation-delay: 0.3s; }
                .animation-delay-600 { animation-delay: 0.6s; }
                .animation-delay-900 { animation-delay: 0.9s; }
                .animation-delay-1200 { animation-delay: 1.2s; }
            `}</style>
        </div>
    );
};

export default Home;
