import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import chheda1 from "@/assets/images/chaheda1.png";
import chheda2 from "@/assets/images/chheda2.png";
import Grain from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
const portfolioProjects = [
  {
    company: "Higher Institute of Technological Studies",
    year: "2022-2025",
    title: "Applied Bachelor in Information Systems Development",
    results: [
      { title: "Business Intelligence & Big Data" },
      { title: "Software Engineering" },
      { title: "Cloud & Database Management" },
    ],
    link: "https://drive.google.com/file/d/1Hde4DcdYn8sjUDfPFvuVf9qzhLKUL_iL/view?usp=sharing",
    image: chheda1,
    button: "View Degree",
  },
  {
    company: "High School of Bni Kaled",
    year: "2019-2022",
    title: "Baccalaureate in Computer Science",
    results: [
      { title: "Algorithms & Logic" },
      { title: "Basic Programming" },
      { title: "Math & Computing" },
    ],
    link: "https://drive.google.com/file/d/1SMxCwZAVN5U9TjWjBCB3uSvh45rOQMpT/view?usp=drive_link",
    image: chheda2,
    button: "View Degree",
  },
  
];

export const DegreesSection = () => {
  return <section className="pb-16 lg:py-24" id="projects">
    <div className="container ">
      <SectionHeader eyebrow={'Academic Degrees'} title={'Academic Degrees'} description={"Take a look at my academic path!"} />

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
