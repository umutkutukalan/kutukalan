import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import LoadingScreen from "../components/LoadingScreen";
import AboutHeader from "../components/aboutpage/AboutHeader";
import type { User } from "../services/userServices";
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutCards from "../components/aboutpage/AboutCards";
import AboutParagraphs from "../components/aboutpage/AboutParagraphs";
gsap.registerPlugin(useGSAP);

export interface AboutProps {
  userResponse: User | null;
}

const About = () => {
  const { currentTrack } = useAudioPlayer();
  const { getUserById, userResponse, getLoading } = useUsers();

  useEffect(() => {
    getUserById(4);
  }, []);

  // const aboutBox1 = useRef<HTMLLIElement>(null);
  // const aboutBox2 = useRef<HTMLLIElement>(null);
  // const aboutBox3 = useRef<HTMLLIElement>(null);

  if (getLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`xl:px-5 xl:pb-5 ${
        currentTrack ? "pb-20" : "pb-5"
      } flex flex-col`}
    >
      <AboutHeader userResponse={userResponse} />
      <AboutParagraphs userResponse={userResponse} />
      {/* <AboutTechnologies /> */}
      {/* <AboutBox
        aboutBox1={aboutBox1}
        aboutBox2={aboutBox2}
        aboutBox3={aboutBox3}
      /> */}
      <AboutCards />
    </div>
  );
};

export default About;
