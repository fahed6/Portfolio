import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { Fragment } from "react";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";

const testimonials = [
  {
    name: "Mohamed Amine Abid",
    position: "Founder of Driving School MAA",
    text: "Played a key role in the project, Fahed brings technical expertise and a strong problem-solving mindset. His contributions had a real impact, and I'm confident he will continue to excel in his career.",
    avatar: memojiAvatar1,
  },
  {
    name: "Hichem Snen El Rais",
    position: "CEO of HMC Metal Construction",
    text: "Fahed was instrumental in developing our company website, helping to enhance our online presence. His attention to detail and technical skills were exceptional. We're thrilled with the results!",
    avatar: memojiAvatar3,
  },
];

const arrayLength = ['', '']

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow={'Happy Clients'} title={'What Clients Say About Me'} description={"Don't just take my word for it. See what my clients have to say about my work."} />

      <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4" style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}>
        <div className="flex flex-none gap-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]  " >
          {arrayLength.map((_, index) => {
            return <Fragment key={index}>
              {testimonials.map((testimonial) => {
                return <Card key={testimonial.name} className={'max-w-xs md:max-w-md hover:-rotate-3 transition duration-300'}>
                  <div className="flex gap-x-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center flex-shrink-0 rounded-full">
                      <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <div>{testimonial.name}</div>
                      <div className="text-white/40 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              })}
            </Fragment>
          })}

        </div>
      </div>
    </div>
  </div>;
};
