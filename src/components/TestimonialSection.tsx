import { testimonials } from "../data/TestimonialsCard";
import testimonialbg from "../assets/background-testimonial.webp";
function TestimonialSection() {
  return (
    <div className="bg-utama lg:h-100 h-250 w-full  ">
      <div className="relative">
        {/* */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-repeat opacity-60"
          style={{ backgroundImage: `url(${testimonialbg})` }}
        />

        {/* */}
        <div className="relative z-10 lg:p-0 ">
          <div className="flex flex-col items-center justify-center lg:flex-row py-5 gap-2 lg:gap-5">
            <div className="hidden lg:block h-px w-10 bg-utama lg:w-50"></div>

            <div className="font-desc font-bold text-xl lg:text-2xl text-second text-center shadow-2xl">
              Words from Our Customers
            </div>

            <div className="h-px w-80 bg-utama lg:w-50"></div>
          </div>

          <div className="mb-15 flex flex-col lg:flex-row gap-5 items-center justify-center p-5 ">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="card bg-third w-90 h-70 shadow-lg lg:hover:scale-105 lg:hover:bg-second transition-all duration-500"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-14 lg:w-20 rounded-full border-3 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg font-uang">
                        {item.name}
                      </h3>

                      <p className="text-sm opacity-70 font-desc">
                        {item.position}
                      </p>

                      <p className="text-xs opacity-50 font-par">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <h2 className="card-title mt-4 text-center font-brand font-thin ">
                    "{item.title}"
                  </h2>

                  <p className="font-par text-justify">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
