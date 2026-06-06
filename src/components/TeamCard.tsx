import { useEffect, useState } from "react";
import axios from "axios";
import { teamRoleDatas } from "../data/TeamRoleData";
import type { RandomUser } from "@/types/randomUser";

function TeamCard() {
  const [teams, setTeams] = useState<RandomUser[]>([]);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=3");
        setTeams(res.data.results)
      } catch (error) {
        console.log(error)
      }
    };
    getTeams()
  },[]);
  return (
    <div className="bg-white w-full">
      <div className="relative z-10 lg:p-0">
        <div className="mb-15 flex flex-col lg:flex-row gap-5 items-center justify-center p-5">
          {teams.map((item, index) => {
            const roleData = teamRoleDatas[index];

            return (
              <div
                key={item.login.uuid}
                className="card bg-third w-90 h-55 shadow-lg lg:hover:scale-105 lg:hover:bg-second transition-all duration-500"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-14 lg:w-20 rounded-full border-3 overflow-hidden">
                        <img
                          src={item.picture.large}
                          alt={`${item.name.first} ${item.name.last}`}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg font-uang">
                        {item.name.first} {item.name.last}
                      </h3>

                      <p className="text-sm opacity-70 font-desc">
                        {roleData.position}
                      </p>
                    </div>
                  </div>

                  <p className="font-par text-justify">{roleData.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
