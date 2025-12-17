import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useUser } from "../hooks/useUserContext";

const About = () => {
  const { currentTrack } = useAudioPlayer();
  const { user } = useUser();
  console.log("User in About Page:", user);
  return (
    <div
      className={`pt-10 px-5 sm:px-10 xl:pb-5 ${
        currentTrack ? "pb-10" : "pb-5"
      }`}
    >
      {/* <div className="w-60 h-60 rounded-full overflow-hidden">
        <img src={user?.profileImg} alt="Profile Image" className="w-full h-full object-cover"/>
      </div> */}
    </div>
  );
};

export default About;
