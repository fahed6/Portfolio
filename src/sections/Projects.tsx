import darkSaasLandingPage from "@/assets/images/projectmaa.png";
import lightSaasLandingPage from "@/assets/images/projectsyf.png";
import horns from "@/assets/images/horns.png";
import pi from "@/assets/images/pi.png";
import aiStartupLandingPage from "@/assets/images/hmc.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Grain from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Driving School MAA",
    year: "2024",
    title: "Full Stack Developer (Internship)",
    results: [
      { title: "Built and tested software solutions" },
      { title: "Integrating APIs" },
      { title: "Implementing Spring Security" },
    ],
    link: "https://github.com/fahed6/Drivng-School-MAA",
    image: darkSaasLandingPage,
    button: "Visit Project Pepository",
  },
  {
    company: "University Project",
    year: "2024",
    title: "Music Player Platform",
    results: [
      { title: "Music browsing and playback interface" },
      { title: "Added playlist management functionality" },
      { title: "Authentication and real-time streaming" },
    ],
    link: "https://github.com/fahed6/mv_manoubiFahed",
    image: lightSaasLandingPage,
    button: "Visit Project Pepository",
  },
  {
    company: "University Project",
    year: "2024",
    title: "Schoool Managment",
    results: [
      { title: "Implementing Spring Security" },
      { title: "real-time email notifications" },
      { title: "Management and data organization" },
    ],
    link: "https://github.com/fahed6/Integration-Project",
    image: pi,
    button: "Visit Project Pepository",
  },
  {
    company: "HMC Metal Construction",
    year: "2023",
    title: "Web Developer (Internship)",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Developed and deployed" },
      
    ],
    link: "https://hmcconstructionmetallique.tn",
    image: aiStartupLandingPage,
    button: "Visit Live Site",
  },
  {
    company: "University Project",
    year: "2023",
    title: "Clothing Brand",
    results: [
      { title: "Built a responsive clothing catalog website" },
      { title: "Designed an interactive product gallery" },
      { title: "Added contact and inquiry forms" },
    ],
    link: "https://fahed6.github.io/horns/index.html",
    image: horns,
    button: "Visit Live Site",
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24" id="projects">
    <div className="container ">
      <SectionHeader eyebrow={'Real-World Results'} title={'Featured Projects'} description={"See how I transformed concepts into engaging digital experiences."} />

      {/* projects */}
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, index) => {
          return <Card key={project.title} className="px-8 pt-9 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 md:pb-0 lg:pb-0 sticky " style={{ top: `calc(64px + ${index * 40}px)` }}>
            <div className="absolute -z-10 opacity-0 inset-0" style={{ backgroundImage: `url(${Grain.src})` }}></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="flex ">
                  <div className="inline-flex items-center justify-start gap-2.5 font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span className="size-1 bg-emerald-400 rounded-full"></span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">{project.title}</h3>

                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map(result => {
                    return <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50"><CheckCircleIcon className='size-5 md:size-6' /><span>{result.title}</span></li>
                  })}
                </ul>

                <a href={project.link}>
                  <button className="bg-white inline-flex md:w-max px-6 justify-center items-center text-gray-950 h-12 rounded-xl mt-8 md:mt-[35.7px] w-full font-bold gap-2 "> <span>{project.button}</span><ArrowUpRightIcon className='size-4' /></button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        })}
      </div>
    </div>
  </section>
};
