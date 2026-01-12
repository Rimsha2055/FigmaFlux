'use client';

import useIntersectionObserver from './useIntersectionObserver';

const AnimatedCard = ({ children, className }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ${isIntersecting ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default function LatestNews() {
  return (
    <section className="py-16 md:py-24 text-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-neue-montreal mb-12">The latest news</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard className="md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <img src="/images/image3.jpg" alt="Lincoln Takes Home 1st place" className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-2">2023 Regional Results</p>
              <h3 className="text-2xl font-neue-montreal mb-4">Lincoln Takes Home 1st place overall.</h3>
              <p className="text-gray-700">The team took home a stunning win, claiming 5 of the top 8 spots! Big shout outs to Emily, Steve, Bryan, and Liza.</p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-sm text-gray-500 mb-2">Upcoming event</p>
            <h3 className="text-2xl font-neue-montreal mb-4">6/11 Lunch Hour Pizza</h3>
            <img src="/images/image4.jpg" alt="Lunch Hour Pizza" className="w-full rounded-lg" />
          </AnimatedCard>

          <AnimatedCard className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-sm text-gray-500 mb-2">Spotlight</p>
            <img src="/images/image5.jpg" alt="Johnny S." className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-neue-montreal mb-2">Johnny S.</h3>
            <p className="text-gray-700">Congrats Johnny on qualifying for Nationals!</p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
