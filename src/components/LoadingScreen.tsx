import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <DotLottieReact
        className="w-20 h-20"
        src="https://lottie.host/c13e1dc0-f7ee-4254-835f-f023d14021b1/CsVgXfNTS6.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LoadingScreen;
