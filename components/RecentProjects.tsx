"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  const numberOfRows = Math.ceil(projects.length / 3);

  return (
    <div className="py-20" id="projects">
      <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          Explore our latest work and innovative solutions
        </p>
      </div>
      {[...Array(numberOfRows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`${rowIndex !== 0 ? "mt-8 md:mt-24 lg:mt-16" : ""}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 px-4 max-w-7xl mx-auto">
            {projects.slice(rowIndex * 3, (rowIndex + 1) * 3).map((item) => (
              <div
                className="w-full flex items-center justify-center"
                key={item.id}
              >
                <PinContainer title={item.title} href={item.link}>
                  {/* Card content remains the same */}
                  <div className="flex flex-col h-full w-full max-w-xs">
                    <div className="relative w-full aspect-[16/9] mb-2 rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <img
                          src="/bg.png"
                          alt="bgimg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <img
                        src={item.img}
                        alt="cover"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-3/4 object-contain"
                      />
                    </div>

                    <div className="flex flex-col flex-grow min-h-0">
                      <h1 className="font-bold text-sm md:text-base lg:text-lg line-clamp-1">
                        {item.title}
                      </h1>

                      <p
                        className="text-xs md:text-sm lg:text-base font-light line-clamp-2 mt-1"
                        style={{ color: "#BEC1DD" }}
                      >
                        {item.des}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          {item.iconLists.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-white/[.2] rounded-full bg-black w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex justify-center items-center"
                              style={{
                                transform: `translateX(-${3 * index + 2}px)`,
                              }}
                            >
                              <img
                                src={icon}
                                alt={`icon${index}`}
                                className="p-1"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center">
                          <p className="text-xs md:text-sm text-purple">
                            Check Live Site
                          </p>
                          <FaLocationArrow
                            className="ml-1.5 w-2.5 h-2.5 md:w-3 md:h-3"
                            color="#CBACF9"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentProjects;
