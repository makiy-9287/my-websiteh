import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { VirusIcon, HardwareIcon, DataRecoveryIcon, CustomBuildIcon, MaintenanceIcon, LaptopIcon } from '../components/icons';

const pcServices = [
    {
        icon: <VirusIcon />,
        title: "Virus & Malware Removal",
        description: "Comprehensive threat removal to restore your system's security and performance. I eliminate viruses, spyware, and ransomware."
    },
    {
        icon: <HardwareIcon />,
        title: "Hardware Upgrades",
        description: "Boost your computer's speed with RAM, SSD, and graphics card upgrades for optimal performance."
    },
    {
        icon: <DataRecoveryIcon />,
        title: "Data Recovery",
        description: "Advanced techniques to recover lost files from failing hard drives, SSDs, and other storage media."
    },
    {
        icon: <CustomBuildIcon />,
        title: "Custom PC Builds",
        description: "Building high-performance PCs tailored to your specific needs, for gaming, content creation, or professional workloads."
    },
    {
        icon: <MaintenanceIcon />,
        title: "System Tune-Up",
        description: "Optimize your system's startup, clean registry, and remove junk files for a faster, more responsive experience."
    },
    {
        icon: <LaptopIcon />,
        title: "Laptop Screen & Battery Replacement",
        description: "Professional replacement services for cracked screens and failing batteries, extending the life of your portable device."
    }
];

const PcLaptop: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                    PC & Laptop Services
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    Peak performance, total reliability. Your technology, perfected.
                </p>
            </div>
            
            <section className="mt-20">
                <h2 className="text-3xl font-bold text-center font-orbitron">Service Highlights</h2>
                <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <HardwareIcon className="h-10 w-10 text-purple-400 mx-auto" />
                        <h3 className="mt-2 font-semibold">Performance Tuning</h3>
                        <p className="text-sm text-gray-400">Unlocking the full potential of your hardware for maximum speed.</p>
                    </div>
                    <div className="p-4">
                        <DataRecoveryIcon className="h-10 w-10 text-purple-400 mx-auto" />
                        <h3 className="mt-2 font-semibold">Data Integrity</h3>
                        <p className="text-sm text-gray-400">Secure data recovery and backup solutions to protect your valuable files.</p>
                    </div>
                    <div className="p-4">
                        <CustomBuildIcon className="h-10 w-10 text-purple-400 mx-auto" />
                        <h3 className="mt-2 font-semibold">Tailored Builds</h3>
                        <p className="text-sm text-gray-400">PCs built from the ground up to match your exact specifications and budget.</p>
                    </div>
                </div>
            </section>

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center font-orbitron mb-12">All Services</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {pcServices.map((service, index) => (
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

export default PcLaptop;
