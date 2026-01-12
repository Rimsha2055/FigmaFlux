'use client';

import useIntersectionObserver from './useIntersectionObserver';

const AnimatedElement = ({ children, className }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ${isIntersecting ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default function RegionalResults() {
  return (
    <section className="text-black">
      <div className="max-w-4xl mx-auto px-6 text-center pt-16 md:pt-24">
        <AnimatedElement className="mb-12">
          <h2 className="text-4xl md:text-5xl font-neue-montreal mb-4">2025 Regional Results</h2>
          <p className="text-sm text-gray-500">Livestreams are available for download below.</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <AnimatedElement>
            <p className="text-sm text-gray-500 mb-4">Speech events</p>
            <ul className="space-y-2">
              <li>Dramatic Interpretation (DI)</li>
              <li>Duo Interpretation (DUO)</li>
              <li>Poetry (POE)</li>
              <li>Humorous Interpretation (HI)</li>
            </ul>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-sm text-gray-500 mb-4">Debate events</p>
            <ul className="space-y-2">
              <li>Extemporaneous Debate (XDB)</li>
              <li>Lincoln-Douglas Debate (LD)</li>
            </ul>
          </AnimatedElement>
        </div>
      </div>
      <div className="mt-6 w-full">
        <img
          src="/images/image6.jpg"
          alt="Lincoln High School"
          width={1280}
          height={640}
          className="w-full h-auto max-h-[640px] object-cover"
        />
      </div>
     
    </section>
  );
}
