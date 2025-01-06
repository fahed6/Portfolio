'use client'
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import bookImage from '../assets/images/book-cover.png'
import mapImage from '../assets/images/maps.png'
import smileMemoji from '../assets/images/smiling.png'
import JavaScriptIcon from '../assets/icons/square-js.svg'
import HtmlIcon from '../assets/icons/html5.svg'
import CssIcon from '../assets/icons/css3.svg'
import GithubIcon from '../assets/icons/github.svg'
import Image from "next/image";
import docker from '../assets/icons/docker-svgrepo-com.svg';
import git from '../assets/icons/git-svgrepo-com.svg';
import java from '../assets/icons/java-svgrepo-com.svg';
import angular from '../assets/icons/logo-angular-svgrepo-com.svg';
import machine from '../assets/icons/machine-learning-svgrepo-com.svg';
import mysql from '../assets/icons/mysql-svgrepo-com.svg';
import php from '../assets/icons/php-svgrepo-com.svg';
import python from '../assets/icons/python-svgrepo-com.svg';
import spring from '../assets/icons/spring-boot-svgrepo-com.svg';
import typescript from '../assets/icons/typescript-svgrepo-com (1).svg';
import wordpress from '../assets/icons/wordpress-svgrepo-com.svg';
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolBoxItems = [
  { title: 'MySQL', iconType: mysql },
  { title: 'PHP', iconType: php },
  { title: 'Wordpress', iconType: wordpress },
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'HTML5', iconType: HtmlIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'Docker', iconType: docker },
  { title: 'Git', iconType: git },
  { title: 'Github', iconType: GithubIcon },
  { title: 'Angular', iconType: angular },
  { title: 'TypeScript', iconType: typescript },
  { title: 'SpringBoot', iconType: spring },
  { title: 'Java', iconType: java },
  { title: 'Machine Learning', iconType: machine },
  { title: 'Python', iconType: python },
  
]

const hobbies = [
  { title: 'Hackathons', emoji: '💻', top: '5%', left: '70%' },
  { title: 'Music', emoji: '🎶', top: '5%', left: '45%' },
  { title: 'Anime', emoji: '⛩️', top: '40%', left: '65%' },
  { title: 'Video Games', emoji: '🎮', top: '35%', left: '30%' },
  { title: 'Meetups', emoji: '🤝', top: '70%', left: '60%' },
  { title: 'Gym', emoji: '🏋', top: '65%', left: '5%' },
  { title: 'Fishing', emoji: '🎣', top: '15%', left: '5%' },
  { title: 'Nature', emoji: '🌳', top: '40%', left: '20%' },
];


export const AboutSection = () => {

  const ref = useRef(null)

  return <div className="py-20 lg:py-28 " id="about">
    <div className="container">
      <SectionHeader eyebrow={'About Me'} title={'A Glimpse Into My World'} description={'Learn more about who I am, what I do, and what inspires me.'} />

      <div className="mt-20 flex flex-col gap-9">

        <div className="grid grid-cols-1 gap-9 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className={'h-[320px] md:p-0 md:col-span-2 lg:col-span-1'}>
            <CardHeader className={'px-6 pt-6'} title={'My Reads'} description={'Explore the books shaping my perspective.'} />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>

          <Card className={'h-[320px] p-0 md:p-0 md:col-span-3 lg:col-span-2 '}>
            <CardHeader className={'px-6 pt-6'} title={'My Toolbox'} description={'Expore the technologies and tools I use to craft exceptional digital experiences.'} />

            <ToolboxItems toolBoxItems={toolBoxItems} itemsWrapperClass='animate-move-left [animation-duration:45s]' />
            <ToolboxItems toolBoxItems={toolBoxItems} itemsWrapperClass='animate-move-right [animation-duration:30s]' />

            <div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className={'h-[320px] p-0 md:p-0 flex flex-col md:col-span-3 lg:col-span-2'}>
            <CardHeader className={'px-6 py-6'} title={'Beyond The Keyboard '} description={'Explore my interests and hobbies beyond the code.'} />

            <div className="relative flex-1" ref={ref}>
              {hobbies.map((hobby, index) => {
                return <motion.div drag dragConstraints={ref} key={index} className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{ top: hobby.top, left: hobby.left }}>
                  <span className="text-gray-950 font-bold">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              })}
            </div>
          </Card>

          <Card className={'h-[320px] p-0 md:p-0 relative md:col-span-2 lg:col-span-1'}>
            <Image src={mapImage} alt="map" className="w-full h-full object-cover p-0 object-left-top" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[5.3rem] rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-900/30 after:rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping"></div> <Image src={smileMemoji} alt="memoji" className="size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Card>
        </div>

      </div>
    </div>
  </div>;
};