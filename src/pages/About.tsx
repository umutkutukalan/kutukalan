import { useEffect } from "react";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useUsers } from "../hooks/useUsers";
import LoadingScreen from "../components/LoadingScreen";
import { aboutImage } from "../utils";

const About = () => {
  const { currentTrack } = useAudioPlayer();
  const { getUserById, userResponse, getLoading } = useUsers();

  useEffect(() => {
    getUserById(4);
  }, []);

  console.log("User Response from useUsers:", userResponse);

  if (getLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`pt-5 px-5 sm:px-10 xl:pb-5 ${
        currentTrack ? "pb-10" : "pb-5"
      }`}
    >
      <div className="w-full rounded-tl-2xl rounded-tr-2xl overflow-hidden">
        <div className="w-full flex items-start justify-between relative bg-gray-900 h-120 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 sm:h-56 md:h-100 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

          <div className="h-full w-full flex flex-col gap-5 z-10 p-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-red-300">
                {userResponse?.firstName} {userResponse?.lastName} |{" "}
                {userResponse?.job}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white z-20">
                {userResponse?.aboutMe}
              </h1>
            </div>
            <ul className="flex flex-col gap-5 text-gray-300">
              {userResponse?.aboutMeItems?.map((item, index) => (
                <>
                  {index < 1 && (
                    <li key={index}>
                      <p className="text-sm">{item}</p>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
          <div className="w-140 h-full relative">
            <div className="absolute right-0 bottom-0">
              <img
                src={aboutImage}
                alt="About Image"
                className="w-full h-full mt-20 brightness-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
