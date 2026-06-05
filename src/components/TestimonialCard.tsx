import { testimonials } from "../data/TestimonialsCard";
function TestimonialCard() {
  return (
    <div className="bg-utama mb-15 flex flex-col lg:flex-row  gap-5 items-center justify-center p-5 overflow-hidden">
      {testimonials.map((item) => (
        <div key={item.id} className="card bg-second w-90 h-70 shadow-lg">
          <div className="card-body">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-14 lg:w-20 rounded-full border-3 overflow-hidden">
                  <img src={item.img} alt={item.alt} className="object-cover" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg font-uang">{item.name}</h3>

                <p className="text-sm opacity-70 font-desc">{item.position}</p>

                <p className="text-xs opacity-50 font-par">{item.location}</p>
              </div>
            </div>

            <h2 className="card-title mt-4 text-center font-brand font-thin">"{item.title}"</h2>

            <p className="font-par text-justify">{item.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;
