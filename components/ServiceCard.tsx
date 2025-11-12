import React, { useRef, MouseEvent } from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateY = (x / width) * 20; // Max rotation 10deg
        const rotateX = -(y / height) * 20; // Max rotation 10deg
        
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative p-0.5 rounded-xl bg-gradient-to-br from-cyan-500/50 via-purple-500/50 to-pink-500/50 transition-all duration-300"
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s' }}
        >
            <div className="relative bg-gray-900 p-6 rounded-lg h-full transition-all duration-300 group-hover:bg-gray-800 overflow-hidden">
                <div 
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: 'translateZ(-10px)' }}
                ></div>
                <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-white font-orbitron">{title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
