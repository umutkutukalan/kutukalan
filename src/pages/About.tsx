import { Link } from "react-router-dom";
import { FaGithub, FaJava, FaLinkedin, FaPython } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const About = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background and main content container */}
      <div className="absolute inset-0 top-20 xl:left-10 left-10 z-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl text-white font-semibold">
            Umut{" "}
            <span className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-transparent bg-clip-text">
              Kütükalan
            </span>
          </h1>
          <h2 className="text-2xl text-white/60">
            <span className="italic">"</span> Yazılım Mühendisi{" "}
            <span className="italic">"</span>
          </h2>
          <div className="max-w-lg flex flex-col gap-5 text-sm text-white/50 mt-5">
            <p>
              <span className="italic bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-transparent bg-clip-text">
                Burdur Mehmet Akif Ersoy Üniversitesi'nde
              </span>
              ,
              <br />
              <span className="italic bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-transparent bg-clip-text">
                Yazılım Mühendisliği
              </span>{" "}
              bölümünden yeni mezun olmuş bir mühendisim.
            </p>
            <p>
              Yalnızca kod yazmayı değil, bir amaca hizmet eden ve gerçek bir
              problemi çözen projeler üretmeyi hedefliyorum. Geliştirme
              süreçlerinde yüzeysel ilerlemek yerine, üzerinde çalıştığım
              aşamalara hakim olmayı ve detaylarıyla anlamayı önemsiyorum.
              {/* Yazılım geliştirme alanında kendimi sürekli geliştirmeye ve yeni teknolojilere adapte olmaya çalışıyorum. Yeni mezun bir yazılım mühendisi olarak, yalnızca kod yazmayı değil, bir amaca hizmet eden ve gerçek bir problemi çözen projeler üretmeyi hedefliyorum. Geliştirme süreçlerinde yüzeysel ilerlemek yerine, üzerinde çalıştığım her aşamaya hakim olmayı ve detaylarıyla anlamayı önemsiyorum. Eksikleri tespit etme, hatalardan ders çıkarma ve bilmediğim konuların üzerine kararlılıkla giderek öğrenme konusunda kendime güveniyorum. Sorumluluk almaktan çekinmeyen, sonuç odaklı ve olumsuzluklara takılmadan çözüm üretmeye odaklanan bir yapıya sahibim. Aynı zamanda ekip çalışmasına uyumlu, açık ve etkili iletişim kurabilen biri olarak ortak hedeflere katkı sağlamayı değerli buluyorum. */}
              {/* "Yeni mezun bir yazılım mühendisi olarak, somut bir amaca hizmet
              eden projeler geliştirmek için çabalıyorum. Uğraştığım süreçlerin
              her detayına hakim olmaya özen gösteriyor; eksikleri bulma, ders
              çıkarma ve bilmediğim bir konunun üzerine gidip onu çözme
              konusundaki kararlılığıma güveniyorum. Ortaya bir sonuç koyabilmek
              adına, olumsuzluklara takılmadan sorumluluk alan bir yapıya
              sahibim. Bu süreçte ekip çalışmasının ve doğru iletişimin gücüne
              inanıyor, her gün bir adım daha ileriye gitmeyi ve severek
              yaptığım bu işte gelişmeyi önemsiyorum." */}
              {/* "Yeni mezun bir yazılım mühendisi olarak, yalnızca kod yazmayı değil, bir amaca hizmet eden ve gerçek bir problemi çözen projeler üretmeyi hedefliyorum. Geliştirme süreçlerinde yüzeysel ilerlemek yerine, üzerinde çalıştığım her aşamaya hakim olmayı ve detaylarıyla anlamayı önemsiyorum. Eksikleri tespit etme, hatalardan ders çıkarma ve bilmediğim konuların üzerine kararlılıkla giderek öğrenme konusunda kendime güveniyorum. Sorumluluk almaktan çekinmeyen, sonuç odaklı ve olumsuzluklara takılmadan çözüm üretmeye odaklanan bir yapıya sahibim. Aynı zamanda ekip çalışmasına uyumlu, açık ve etkili iletişim kurabilen biri olarak ortak hedeflere katkı sağlamayı değerli buluyorum." */}
            </p>
            <p>
              Eksikleri tespit etme, hatalardan ders çıkarma ve bilmediğim
              konuların üzerine kararlılıkla giderek öğrenme konusunda kendime
              güveniyorum. Sorumluluk almaktan çekinmeyen, sonuç odaklı ve
              olumsuzluklara takılmadan çözüm üretmeye odaklanan bir yapıya
              sahibim.
            </p>
          </div>
        </div>
      </div>
      {/* <div
          className="absolute xl:left-10 lg:left-35 md:left-20 xl:bottom-10 bottom-15 w-[clamp(500px,10vw,600px)]
 z-50"
        >
          <img
            src={mechanickey}
            alt="About background"
            className="w-full brightness-60"
          />
        </div> */}

      {/* Content section with links and skills */}
      <div className="w-full h-full flex items-center justify-between relative z-10">
        {/* left section with links */}
        <div className="w-full h-full border-r border-white/10"></div>

        {/* medyan section with skills */}
        <div className="w-full h-full border-r border-white/10"></div>

        {/* right section with skills */}
        <ul className="w-full h-full flex flex-col justify-between">
          <li className="w-full h-full border-b border-white/10 overflow-hidden"></li>
          <li className="w-full h-full border-b border-white/10 overflow-hidden">
            <div className="w-full h-full flex flex-col justify-between">
              <ul className="w-full h-full border-b border-white/10 grid grid-cols-3">
                <li className="w-full h-full bg-white/10"></li>
                <li className="w-full h-full bg-white/10"></li>
                <li className="w-full h-full flex items-center justify-center">
                  <FaJava className="text-5xl text-white" />
                </li>
              </ul>
              <ul className="w-full h-full border-b border-white/10 grid grid-cols-3">
                <li className="w-full h-full border-r border-white/10"></li>
                <li className="w-full h-full border-r border-white/10 flex items-center justify-center">
                  <RiJavascriptFill className="text-5xl text-yellow-600" />
                </li>
                <li className="w-full h-full flex items-center justify-center bg-white/30">
                  <BiLogoTypescript className="text-5xl text-white" />
                </li>
              </ul>
              <ul className="w-full h-full grid grid-cols-3">
                <li className="w-full h-full flex items-center justify-center bg-white/10">
                  <FaPython className="text-5xl text-white" />
                </li>
                <li className="w-full h-full"></li>
                <li className="w-full h-full"></li>
              </ul>
            </div>
          </li>
          <li className="w-full h-full overflow-hidden flex flex-col justify-between">
            <div className="w-full h-full overflow-hidden"></div>
            <ul className="w-full h-full flex flex-col">
              <Link
                to="https://github.com/umutkutukalan"
                className="w-full h-full p-4 border-t border-b border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FaGithub />
                  <span>GitHub</span>
                </div>
                <MdArrowOutward />
              </Link>
              <Link
                to="https://www.linkedin.com/in/umutkutukalan/"
                className="w-full h-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </div>
                <MdArrowOutward />
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
