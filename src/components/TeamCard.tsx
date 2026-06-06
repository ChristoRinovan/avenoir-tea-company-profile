import { teamDatas } from "../data/TeamsCard";

function TeamSection() {
  return (
    <div className="bg-white w-full">
      <div className="relative">
        <div className="relative z-10 lg:p-0">
          <div className="mb-15 flex flex-col lg:flex-row gap-5 items-center justify-center p-5">
            {teamDatas.map((item) => (
              <div
                key={item.id}
                className="card bg-second w-90 h-70 shadow-lg lg:hover:scale-105 lg:hover:bg-second transition-all duration-500"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-14 lg:w-20  border-3 ">
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
                    </div>
                  </div>

                  <h2 className="card-title mt-4 text-center font-brand font-thin">
                    {item.title}
                  </h2>

                  <p className="font-par text-justify">{item.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
