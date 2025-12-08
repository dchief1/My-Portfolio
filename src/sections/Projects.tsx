import crunchiesPage from "@/assets/images/crunchies.png";
import herMoneyPage from "@/assets/images/hermoney.png";
import reydeskPage from "@/assets/images/reydesk.png";
import ingrydPage from "@/assets/images/ingryd.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Peachblossom",
    year: "2022",
    title: "Crunchies",
    results: [
      { title: "Cut Google Maps API cost by over 60% with a custom location solution." },
      { title: "Improved payment flow by preventing duplicate charges." },
      { title: "Added automatic recovery for failed or incomplete payments." },
    ],
    link: "https://crunchiesonline.com/",
    image: crunchiesPage,
  },
  {
    company: "Innovative Co",
    year: "2025",
    title: "Hermoney Fintech",
    results: [
      { title: "Built a stable bill-payment system with automatic failure handling." },
      { title: "Encrypted sensitive data to improve platform security." },
      { title: "Optimized backend APIs for faster performance." },
    ],
    link: "https://www.hermoney-finance.com/",
    image: herMoneyPage,
  },
  {
    company: "Netware Innovative Labs",
    year: "2024",
    title: "Reydesk",
    results: [
      { title: "Built a remote desktop app." },
      { title: "Developed scalable microservices for smoother operations." },
      { title: "Enabled real-time remote support for faster ticket resolution." },
    ],
    link: "https://reydesk.com/",
    image: reydeskPage,
  },
  {
    company: "Peachblossom",
    year: "2024",
    title: "Ingryd Academy",
    results: [
      { title: "Improved course discovery to help students find content faster." },
      { title: "Increased platform speed for a smoother learning experience." },
      { title: "Enhanced dashboard design to boost student engagement." },
    ],
    link: "https://ingrydacademy.com/en",
    image: ingrydPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experience."
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl md:text-4xl ">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-2 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-start gap-2 text-sm md:text-base text-white/50"
                      >
                        {/* keep icon a fixed size and prevent it from shrinking when text wraps */}
                        <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="w-4 h-4 shrink-0" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute md:w-full lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
