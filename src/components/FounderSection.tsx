import Ivan from "../assets/team1.webp";

function FounderSection() {
  return (
    <section className="w-full bg-white px-5 py-20 text-utama">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 text-center">
        <div className="avatar">
          <div className="w-40 rounded-full border-4 border-second shadow-xl shadow-utama/20 overflow-hidden lg:w-56">
            <img
              src={Ivan}
              alt="Ivan Widi as Founder and Chief of Avenoir Tea"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-brand text-5xl lg:text-7xl">
            Ivan Widi
          </h2>

          <p className="mt-5 font-desc text-lg tracking-widest text-utama/70 lg:text-2xl">
            Founder and Chief Executive Officer
          </p>
        </div>

        <p className="max-w-3xl font-par text-sm leading-relaxed tracking-widest text-utama/80 lg:text-md">
          The visionary behind Avenoir Tea, leading the brand with a passion for
          premium tea craftsmanship, elegant experiences, and timeless product
          quality.
        </p>
      </div>
    </section>
  );
}

export default FounderSection;