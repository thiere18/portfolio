import Portfolio from "@/components/Portfolio";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
    return <Portfolio data={portfolioData} />;
}