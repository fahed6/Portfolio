"use client";
import memojiImage from '@/assets/images/hi1.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/heroOrbit'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { MouseEvent } from "react";

export const HeroSection = () => {

  function contact(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function projects(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return <div className='py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage: `url(${grainImage.src})`
    }}></div>
    <div className=' size-[620px] hero-ring'></div>
    <div className=' size-[820px] hero-ring'></div>
    <div className=' size-[1020px] hero-ring'></div>
    <div className=' size-[1220px] hero-ring'></div>
    <HeroOrbit size={800} rotation={-72} shouldSpin shouldOrbit spinDuration={'48s'}>
        <StarIcon className='size-28 text-emerald-300'/>
    </HeroOrbit>
    <HeroOrbit size={550} rotation={20} shouldSpin shouldOrbit spinDuration={'38s'}>
        <StarIcon className='size-12 text-emerald-300'/>
    </HeroOrbit>
    <HeroOrbit size={590} rotation={98} shouldSpin shouldOrbit spinDuration={'40s'}>
        <StarIcon className='size-8 text-emerald-300'/>
    </HeroOrbit>
    <HeroOrbit size={430} rotation={-14} shouldOrbit spinDuration={'30s'}>
        <SparkleIcon className='size-8 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={440} rotation={79} shouldOrbit spinDuration={'32s'}>
        <SparkleIcon className='size-5 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={530} rotation={178} shouldOrbit spinDuration={'36s'}>
        <SparkleIcon className='size-10 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={710} rotation={144} shouldOrbit spinDuration={'44s'}>
        <SparkleIcon className='size-14 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={720} rotation={85} shouldOrbit spinDuration={'46s'}>
        <div className='size-3 rounded-full bg-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41} shouldOrbit spinDuration={'34s'}>
        <div className='size-2 rounded-full bg-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5} shouldOrbit spinDuration={'42s'}>
        <div className='size-2 rounded-full bg-emerald-300/20'/>
    </HeroOrbit>
    </div>
    <div className="container">
      <div className='flex flex-col items-center'>
      <Image src={memojiImage} className='size-[200px]'  alt="Person peeking from behind laptop" />
    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
    <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping-large"></div>
          </div>      <div className='text-sm font-medium'> Available for new projects</div>
    </div>
    </div>
    <div className='max-w-lg mx-auto'>
    <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'> Building Exceptional User Experiences</h1>
    <p className='mt-4 text-center text-white/60 md:text-lg'>Im Fahed, a Full-Stack developer and AI student. I specialize in building robust, scalable applications from concept to deployment. Let's collaborate on your next project! </p>   
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
      <button onClick={projects} className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
        <span className='font-semibold'>Explore my work</span>
        <ArrowDown className='size-4' />
      </button>
      
      <button onClick={contact}  className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
        <span >👋</span>
        <span className='font-semibold'>Let's connect</span>
      </button>
      
    </div>
    </div>
  </div>;
};
