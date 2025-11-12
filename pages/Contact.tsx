import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../components/icons';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        setTimeout(() => {
            setStatus('Message sent successfully! I will get back to you shortly.');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    const inputClasses = "py-3 px-4 block w-full shadow-sm bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.5)] outline-none";

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                    Get In Touch
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    Have a project in mind or need technical support? Let's connect.
                </p>
            </div>

            <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start">
                        <EnvelopeIcon className="flex-shrink-0 h-6 w-6 text-cyan-400 mt-1" />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-white">Email</h3>
                            <p className="text-gray-400">Direct line for all inquiries.</p>
                            <a href="mailto:contact@cybercore.dev" className="text-cyan-400 hover:text-cyan-300 transition">contact@cybercore.dev</a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-cyan-400 mt-1" />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-white">Phone</h3>
                            <p className="text-gray-400">Available during business hours.</p>
                            <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300 transition">(123) 456-7890</a>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <MapPinIcon className="flex-shrink-0 h-6 w-6 text-cyan-400 mt-1" />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-white">Location</h3>
                            <p className="text-gray-400">Providing services remotely and on-site.</p>
                            <p className="text-cyan-400">San Francisco, CA</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700/50">
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                             <a href="#" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125"><TwitterIcon className="w-6 h-6" /></a>
                             <a href="#" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125"><LinkedInIcon className="w-6 h-6" /></a>
                             <a href="#" className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125"><GithubIcon className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 rounded-2xl bg-black/30 border border-cyan-500/20 shadow-xl shadow-cyan-900/50">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium text-gray-300">Full name</label>
                                <div className="mt-1">
                                    <input type="text" name="full-name" id="full-name" autoComplete="name" required className={inputClasses} />
                                </div>
                            </div>
                           
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" required className={inputClasses} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows={4} required className={inputClasses}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </div>
                    </form>
                    {status && <p className={`mt-4 text-center text-sm ${status.includes('successfully') ? 'text-green-400' : 'text-cyan-300'}`}>{status}</p>}
                </div>
            </div>
        </div>
    );
};

export default Contact;
