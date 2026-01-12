export default function Hero() {
  return (
    <section className="text-center py-16 md:py-24 text-black">
      <div className="px-6">
        <p className="text-sm md:text-base mb-6">Committed to all students in need</p>
        <h1 className="font-serif font-normal mx-auto max-w-6xl leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-2xl xl:text-[65px] 2xl:text-[90px]">
          Lincoln High School Speech and Debate
          <br />
          Club
        </h1>
        <a href="#" className="inline-block mt-8 md:mt-10 underline text-2xl">
          Join us
        </a>
      </div>
      <div className="mt-6 w-full">
        <img
          src="/images/image1.jpg"
          alt="Lincoln High School"
          width={1280}
          height={640}
          className="w-full h-auto max-h-[640px] object-cover"
        />
      </div>
    </section>
  );
}
