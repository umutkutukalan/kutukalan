import { dockerpostman, iphonechip, runaley, sunucu } from "../../utils";

const AboutCards = () => {
  return (
    <section className="h-full px-5 sm:px-10">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className="w-full h-100 rounded-2xl bg-[#0e0e10] flex flex-col p-5"
        >
          <div className="h-4/5 w-full flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 h-20 bg-gradient-to-b from-[#0e0e10] to-transparent"></div>
            <div className="absolute h-full right-0 w-30 bg-gradient-to-l from-[#0e0e10] to-transparent"></div>
            <img
              src={iphonechip}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute h-full right-0 left-0 w-30 bg-gradient-to-r from-[#0e0e10] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-start">
            <div className="flex flex-col gap-1">
              <h4>Web Tasarımı</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                React ile modern, responsive ve kullanıcı odaklı web arayüzleri
                geliştiriyorum. Temiz tasarım ve akıcı deneyim önceliğim.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-100 rounded-2xl bg-[#0e0e10] flex flex-col p-5"
        >
          <div className="h-4/5 w-full flex items-start justify-center overflow-hidden relative pt-2">
            <img src={runaley} alt="" className="w-50" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-start">
            <div className="flex flex-col gap-1">
              <h4>Mobil Geliştirme</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                React Native ve Expo ile mobil uygulamalar geliştiriyorum.
                Component mimarisi, ekran düzeni ve performans odaklı
                ilerliyorum.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-100 rounded-2xl bg-[#0e0e10] flex flex-col p-5"
        >
          <div className="h-4/5 w-full flex items-center justify-center overflow-hidden relative">
            <img src={dockerpostman} alt="" className="w-100" />
            <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-start">
            <div className="flex flex-col gap-1">
              <h4>Postman & Docker</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                API testlerini Postman ile yapıyor, projeleri Docker kullanarak
                izole ve taşınabilir ortamlarda çalıştırıyorum.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-100 rounded-2xl bg-[#0e0e10] flex flex-col p-5"
        >
          <div className="h-4/5 w-full flex items-center justify-center overflow-hidden relative">
            <img src={sunucu} alt="" className="w-120" />
            <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
          </div>
          <div className="h-1/5 w-full flex items-start">
            <div className="flex flex-col gap-1">
              <h4>Sunucu & Deploy</h4>
              <p className="text-[10px] lg:text-xs text-gray-400">
                Projelerimi VPS üzerinde canlıya alıyor, React uygulamalarını
                Nginx ile, backend servislerini Spring Boot ile çalıştırıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
