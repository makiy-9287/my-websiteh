import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
    const socialLinks = [
        { href: '#', icon: <TwitterIcon className="h-5 w-5" />, name: 'Twitter' },
        { href: '#', icon: <LinkedInIcon className="h-5 w-5" />, name: 'LinkedIn' },
        { href: '#', icon: <GithubIcon className="h-5 w-5" />, name: 'GitHub' },
    ];

    return (
        <footer className="bg-transparent border-t border-cyan-500/10 mt-24">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-gray-400 text-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <p>&copy; {new Date().getFullYear()} CyberCore IT Solutions. All Rights Reserved.</p>
                        <p className="mt-1 sm:mt-0">Crafting Digital Excellence, One Byte at a Time.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {socialLinks.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                aria-label={link.name}
                                className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-125"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
