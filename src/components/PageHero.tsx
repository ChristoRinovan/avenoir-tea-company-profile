import pageheroimg from "../assets/pagehero.svg";

type PageHeroProps = {
  title: string;
};

function PageHero({ title }: PageHeroProps) {
  return (
    <section className="hero relative min-h-[30vh] lg:min-h-[40vh] overflow-hidden">
      <img
        src={pageheroimg}
        alt="Avenoir Tea"
        className="absolute inset-0 h-full w-full object-cover "
      />
     
      <div className="hero-content relative text-center">
        <h1 className="text-4xl font-bold font-brand text-shadow-lg/60 tracking-wide text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default PageHero;
