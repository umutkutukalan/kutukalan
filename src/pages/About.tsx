import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import LoadingScreen from "../components/LoadingScreen";
import AboutHeader from "../components/aboutpage/AboutHeader";
import type { User } from "../services/userServices";
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutParagraphs from "../components/aboutpage/AboutParagraphs";
import AboutFrontendCards from "../components/aboutpage/AboutFrontendCards";
import AboutBackendCards from "../components/aboutpage/AboutBackendCards";
gsap.registerPlugin(useGSAP);

export interface AboutProps {
  userResponse: User | null;
}

const About = () => {
  const { currentTrack } = useAudioPlayer();
  const { getUserById, userResponse, getLoading } = useUsers();

  useEffect(() => {
    getUserById(1);
  }, []);

  // const aboutBox1 = useRef<HTMLLIElement>(null);
  // const aboutBox2 = useRef<HTMLLIElement>(null);
  // const aboutBox3 = useRef<HTMLLIElement>(null);

  if (getLoading) {
    return <LoadingScreen key={location.pathname} />;
  }

  return (
    <div
      className={` xl:px-5 xl:pb-5 ${
        currentTrack ? "pb-20" : "pb-5"
      } flex flex-col h-full`}
    >
      <AboutHeader userResponse={userResponse} />
      <AboutParagraphs
        title={"Estetik ve Modern Arayüzler"}
        description={
          "Kullanıcı deneyimini ön planda tutan, estetik ve modern arayüzler tasarlıyor ve geliştiriyorum."
        }
        grayeffect={true}
        face={"frontend"}
      />
      {/* <AboutTechnologies /> */}
      {/* <AboutBox
        aboutBox1={aboutBox1}
        aboutBox2={aboutBox2}
        aboutBox3={aboutBox3}
      /> */}
      <AboutFrontendCards />
      <AboutParagraphs
        title={"Disiplinli ve Dinamik Tasarım Mimarisi"}
        description={
          "Güvenlik, performans ve ölçeklenebilirliği ön planda tutan disiplinli ve dinamik tasarım mimarileri oluşturuyorum."
        }
        grayeffect={false}
        face={"backend"}
      />
      <AboutBackendCards />
    </div>
  );
};

export default About;
