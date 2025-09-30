import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Thierno Ibrahima LO | Senior Backend & DevOps Engineer",
    description: "Backend engineer and system architect specialized in Golang, Python, Kubernetes, and distributed systems. Building scalable production systems from Dakar, Senegal.",
    keywords: ["Backend Engineer", "DevOps", "Golang", "Python", "Kubernetes", "Microservices", "Distributed Systems", "Freelance Developer"],
    authors: [{ name: "Thierno Ibrahima LO" }],
    openGraph: {
        title: "Thierno Ibrahima LO | Senior Backend & DevOps Engineer",
        description: "Backend engineer specialized in building scalable systems with Golang and Python",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Thierno Ibrahima LO | Senior Backend & DevOps Engineer",
        description: "Backend engineer specialized in building scalable systems",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}