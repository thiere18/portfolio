'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Terminal } from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';

interface PortfolioProps {
    data: PortfolioData;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ['home', 'work', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'home' },
        { id: 'work', label: 'work' },
        { id: 'skills', label: 'skills' },
        { id: 'projects', label: 'projects' },
        { id: 'contact', label: 'contact' }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white'}`}>
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button onClick={() => scrollToSection('home')} className="font-mono text-sm font-semibold flex items-center gap-2">
                            <Terminal size={16} />
                            thierno@lo
                        </button>

                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`font-mono text-sm transition-colors ${
                                        activeSection === item.id
                                            ? 'text-gray-900 font-semibold'
                                            : 'text-gray-500 hover:text-gray-900'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-600"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left font-mono text-sm text-gray-600 hover:text-gray-900"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center px-6 pt-20">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            {data.personal.name}
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-700 mb-6">
                            {data.personal.tagline}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-4">
                            {data.personal.bio}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>{data.personal.location}</span>
                            <span>•</span>
                            <span className="text-green-600 font-medium">{data.personal.status}</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-8 border-y border-gray-200">
                        {data.stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-400">{stat.subtext}</div>
                            </div>
                        ))}
                    </div>

                    {/* Principles */}
                    <div className="mb-12 p-6 bg-gray-50 border-l-4 border-gray-900">
                        <div className="text-sm font-semibold mb-3 text-gray-900">ENGINEERING PRINCIPLES</div>
                        <div className="space-y-2">
                            {data.principles.map((principle, idx) => (
                                <div key={idx} className="text-sm text-gray-700 flex items-start">
                                    <span className="mr-2 text-gray-400">→</span>
                                    <span>{principle}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Highlights */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {data.highlights.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={data.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-900 transition-colors text-sm"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                        <a
                            href={data.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-gray-900 transition-colors text-sm"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${data.personal.email}`}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm"
                        >
                            <Mail size={16} />
                            Get in Touch
                        </a>
                    </div>

                    <button
                        onClick={() => scrollToSection('work')}
                        className="mt-12 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        See what I&#39;ve built <ChevronDown size={16} />
                    </button>
                </div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-24 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Work</h2>
                    <p className="text-gray-600 mb-16 text-lg">
                        Problems I&#39;ve solved for real companies with real users
                    </p>

                    <div className="space-y-16">
                        {data.experience.map((job, idx) => (
                            <div key={idx}>
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <h3 className="text-2xl font-bold">{job.title}</h3>
                                        <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                                    </div>
                                    <div className="text-gray-600 mb-2">{job.company}</div>
                                    <p className="text-gray-600 italic">{job.summary}</p>
                                </div>

                                <div className="space-y-10">
                                    {job.projects.map((project, pidx) => (
                                        <div key={pidx} className="border-l-2 border-gray-300 pl-8 pb-8">
                                            <div className="mb-4">
                                                <h4 className="text-xl font-bold mb-1">{project.name}</h4>
                                                {project.client && (
                                                    <div className="text-sm text-gray-500 font-mono">{project.client}</div>
                                                )}
                                            </div>

                                            <div className="space-y-4 mb-6">
                                                {project.problem && (
                                                    <div>
                                                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Problem</div>
                                                        <p className="text-gray-700">{project.problem}</p>
                                                    </div>
                                                )}
                                                {project.solution && (
                                                    <div>
                                                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Solution</div>
                                                        <p className="text-gray-700">{project.solution}</p>
                                                    </div>
                                                )}
                                                {project.impact && (
                                                    <div>
                                                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Impact</div>
                                                        <p className="text-gray-700 font-medium">{project.impact}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-2 py-1 bg-white border border-gray-200 text-gray-700 font-mono"
                                                    >
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Skills</h2>
                    <p className="text-gray-600 mb-16 text-lg">
                        Technologies I actually use, not just buzzwords from tutorials
                    </p>

                    <div className="space-y-10">
                        {Object.entries(data.skills).map(([category, skillData]) => (
                            <div key={category}>
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1">{category}</h3>
                                    <p className="text-sm text-gray-600">{skillData.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillData.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-sm px-3 py-2 bg-gray-100 text-gray-800 font-mono hover:bg-gray-200 transition-colors"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-6 bg-gray-50 border-l-4 border-gray-300">
                        <div className="text-sm font-semibold mb-3">FUN FACTS</div>
                        <div className="space-y-2">
                            {data.funFacts.map((fact, idx) => (
                                <div key={idx} className="text-sm text-gray-700">
                                    → {fact}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Side Projects</h2>
                    <p className="text-gray-600 mb-16 text-lg">
                        Things I built when I wasn&#39;t being paid to build things
                    </p>

                    <div className="space-y-10">
                        {data.projects.map((project, idx) => (
                            <div key={idx} className="border-l-2 border-gray-400 pl-8">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                                        <p className="text-sm text-gray-600 italic">{project.tagline}</p>
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 font-mono">
                    {project.status}
                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-white border border-gray-200 text-gray-700 font-mono"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Let&#39;s Talk</h2>
                    <p className="text-gray-600 mb-12 text-lg">
                        I&#39;m always open to interesting projects and opportunities. If you have a problem that needs solving, let&#39;s chat.
                    </p>

                    <div className="space-y-4 mb-12">
                        <div className="flex items-center gap-3 text-gray-700">
                            <Mail size={20} />
                            <a
                                href={`mailto:${data.personal.email}`}
                                className="text-lg hover:text-gray-900 transition-colors"
                            >
                                {data.personal.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Linkedin size={20} />
                            <a
                                href={data.personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Github size={20} />
                            <a
                                href={data.personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <ExternalLink size={20} />
                            <a
                                href={data.personal.upwork}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition-colors"
                            >
                                Upwork Profile (100% Success Rate)
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-gray-200">
                        <p className="text-sm text-gray-500 font-mono">
                            © 2025 {data.personal.name} · Built with React & too much coffee
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;