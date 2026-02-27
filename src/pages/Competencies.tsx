import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import LoadingScreen from "../components/LoadingScreen";
import CompetenceHeader from "../components/competencepage/CompetenceHeader";
import type { User } from "../services/userServices";
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CompetenceParagraphs from "../components/competencepage/CompetenceParagraphs";
import CompetenceFrontendCards from "../components/competencepage/CompetenceFrontendCards";
import CompetenceBackendCards from "../components/competencepage/CompetenceBackendCards";
import Footer from "../components/footer/Footer";
gsap.registerPlugin(useGSAP);

export interface CompetenceProps {
  userResponse: User | null;
}

const Competencies = () => {
  const { currentTrack } = useAudioPlayer();
  const { getUserById, userResponse, getLoading } = useUsers();

  useEffect(() => {
    getUserById(1).catch(() => {
      return;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      } flex flex-col`}
    >
      <CompetenceHeader userResponse={userResponse} />
      <CompetenceParagraphs
        title={"Estetik ve Modern Arayüzler"}
        description={
          "Amaca hizmet eden projeler geliştirmeye, öğrenme sürecinin her detayına hakim olmaya odaklanan bir yazılım mühendisiyim."
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
      <CompetenceFrontendCards />
      <CompetenceParagraphs
        title={"Disiplinli ve Dinamik Yazılım Mimarisi"}
        description={`Güvenlik, performans ve ölçeklenebilirliği ön planda tutan disiplinli ve dinamik mimariler oluşturuyorum. Eksikleri tespit etme, hatalardan ders çıkarma ve bilmediğim konuların üzerine kararlılıkla giderek öğrenme konusunda kendime güveniyorum.`}
        grayeffect={false}
        face={"backend"}
      />
      <CompetenceBackendCards />
      <Footer />
    </div>
  );
};

// Sorumluluk almaktan çekinmeyen, sonuç odaklı ve olumsuzluklara takılmadan çözüm üretmeye odaklanan bir yapıya sahibim. Aynı zamanda ekip çalışmasına uyumlu, açık ve etkili iletişim kurabilen biri olarak ortak hedeflere katkı sağlamayı değerli buluyorum."

export default Competencies;
