import Ivan from "../assets/team1.webp";
type FounderCardProps = {
  name: string;
  position: string;
  bio: string;
  isCard?:boolean
};
function FounderCard({name,position,bio,isCard = true}:FounderCardProps) {
  return (
    <div className="flex justify-center">
      <div className={
          isCard
            ? "card bg-third w-90 h-55 shadow-lg lg:hover:scale-105 lg:hover:bg-second transition-all duration-500"
            : "w-90 h-auto bg-transparent shadow-none"
        }
      >
        <div className={isCard ? "card-body" : ""}>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 lg:w-20 rounded-full border-3 overflow-hidden">
                <img
                  src={Ivan}
                  alt="Ivan Widi as Founder and Chief of Avenoir Tea"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg font-uang">{name}</h3>

              <p className="text-sm opacity-70 font-desc">{position}</p>
            </div>
          </div>

          <p className="font-par text-justify">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default FounderCard;
