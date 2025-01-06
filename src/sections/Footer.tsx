import ArrowUp from '../assets/icons/arrow-up-right.svg';

const footerLinks = [
  { title: 'Github', link: 'https://github.com/fahed6' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/mannoubi' },
  { title: 'Resume', link: 'https://drive.google.com/file/d/14YWAUbmpReJDSKETR_9phJElYjFJTNZh/view?usp=sharing' },
  { title: 'Certifications', link: 'https://drive.google.com/file/d/1vBoQ2dM8bXm5Ln0A10nLAa7iLiFPh-RF/view?usp=sharing' },


]
export const Footer = () => {
  return <footer className='relative z-10 overflow-x-clip'>
  <div className="absolute bottom-0 h-[400px] w-[1600px] left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10" 
    style={{
      maskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
      WebkitMaskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)', 
    }}
  ></div>

  <div className="container">      
    <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
      <div className='text-white/40'></div>
      <nav className='flex flex-col md:flex-row items-center gap-8'>
        {footerLinks.map(link => {
          return (
            <a 
              key={link.title} 
              href={link.link} 
              target="_blank" // This makes the link open in a new tab/window
              rel="noopener noreferrer" // Security enhancement for links opening in new tab
              className='inline-flex items-center gap-1.5'
            >
              <span className='font-semibold'>{link.title}</span>
              <ArrowUp className='size-4'/>
            </a>
          );
        })}
      </nav>
    </div>
  </div>
</footer>
};