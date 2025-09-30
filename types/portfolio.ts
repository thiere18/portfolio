export interface PersonalInfo {
    name: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    upwork: string;
    status: string;
}

export interface Stat {
    label: string;
    value: string;
    subtext: string;
}

export interface Highlight {
    title: string;
    items: string[];
}

export interface Project {
    name: string;
    client?: string;
    period?: string;
    description?: string;
    problem?: string;
    solution?: string;
    impact?: string;
    achievements?: string[];
    tech: string[];
}

export interface Experience {
    period: string;
    title: string;
    company: string;
    summary: string;
    projects: Project[];
}

export interface SkillCategory {
    description: string;
    items: string[];
}

export interface Skills {
    [key: string]: SkillCategory;
}

export interface SideProject {
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    status: string;
    link: string | null;
}

export interface PortfolioData {
    personal: PersonalInfo;
    principles: string[];
    stats: Stat[];
    highlights: Highlight[];
    experience: Experience[];
    skills: Skills;
    projects: SideProject[];
    funFacts: string[];
}