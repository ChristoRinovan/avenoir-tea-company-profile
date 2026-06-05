import { testimonials } from "../data/TestimonialsCard";
function TestimonialCard() {
  return (
    <div>
      {testimonials.map((item) => (
        <div key={item.id} className="card bg-second w-96 shadow-lg">
          <div className="card-body">
            
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={item.img} alt={item.alt} />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>

                <p className="text-sm opacity-70">{item.position}</p>

                <p className="text-xs opacity-50">{item.location}</p>
              </div>
            </div>

            
            <h2 className="card-title mt-4">{item.title}</h2>

            
            <p>{item.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;
