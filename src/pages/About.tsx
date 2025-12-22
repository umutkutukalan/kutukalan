import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import LoadingScreen from "../components/LoadingScreen";
import AboutHeader from "../components/aboutpage/AboutHeader";
import AboutTechnologies from "../components/aboutpage/AboutTechnologies";
import AboutParagraphContent from "../components/aboutpage/AboutParagraphContent";
import type { User } from "../services/userServices";
import AboutBox from "../components/aboutpage/AboutBox";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

  const aboutBox1 = useRef<HTMLLIElement>(null);
  const aboutBox2 = useRef<HTMLLIElement>(null);
  const aboutBox3 = useRef<HTMLLIElement>(null);

  if (getLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`pt-15 sm:pt-5 px-5 sm:px-10 xl:pb-5 ${
        currentTrack ? "pb-10" : "pb-5"
      } flex flex-col gap-10`}
    >
      <AboutHeader userResponse={userResponse} />
      <AboutTechnologies />
      <AboutBox
        aboutBox1={aboutBox1}
        aboutBox2={aboutBox2}
        aboutBox3={aboutBox3}
      />
      <AboutParagraphContent userResponse={userResponse} />
    </div>
  );
};

export default About;
