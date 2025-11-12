import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { CctvIcon, MaintenanceIcon, RemoteViewIcon, HardwareIcon, ShieldCheckIcon, LaptopIcon } from '../components/icons';

const cctvServices = [
    {
        icon: <CctvIcon />,
        title: "HD & IP Camera Installation",
        description: "Crystal-clear video with modern IP cameras. I design and install systems tailored to your property's specific security needs."
    },
    {
        icon: <MaintenanceIcon />,
        title: "System Maintenance & Health Checks",
        description: "Proactive maintenance to ensure your surveillance system is always operational, reliable, and recording when you need it most."
    },
    {
        icon: <RemoteViewIcon />,
        title: "Remote Viewing Setup",
        description: "Access your live camera feeds from anywhere in the world on your smartphone, tablet, or computer. Secure and convenient."
    },
    {
        icon: <HardwareIcon />,
        title: "DVR/NVR Upgrades & Configuration",
        description: "Upgrade your recording hardware for more storage, better performance, and advanced features like smart motion detection."
    },
];

const Cctv: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                    CCTV Surveillance Solutions
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    Securing your world with cutting-edge technology and expert installation.
                </p>
            </div>

            <section className="mt-20">
                <h2 className="text-3xl font-bold text-center font-orbitron">Key Features</h2>
                <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 text-cyan-400 mx-auto" />
                        <h3 className="mt-2 font-semibold">24/7 Monitoring</h3>
                        <p className="text-sm text-gray-400">Reliable, round-the-clock surveillance for ultimate peace of mind.</p>
                    </div>
                    <div className="p-4">
                        <CctvIcon className="h-10 w-10 text-cyan-400 mx-auto" />
                        <h3 className="mt-2 font-semibold">High-Definition Video</h3>
                        <p className="text-sm text-gray-400">Capture every detail with crisp, high-resolution camera technology.</p>
                    </div>
                    <div className="p-4">
                        <LaptopIcon className="h-10 w-10 text-cyan-400 mx-auto" />
                        <h3 className="mt-2 font-semibold">Remote Access</h3>
                        <p className="text-sm text-gray-400">View live and recorded footage from anywhere on any device.</p>
                    </div>
                </div>
            </section>

            <div className="mt-16">
                 <h2 className="text-3xl font-bold text-center font-orbitron mb-12">Our Services</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {cctvServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cctv;
