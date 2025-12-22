import type { AboutProps } from "../../pages/About";

const AboutParagraphContent = ({ userResponse }: AboutProps) => {
  return (
    <section className="py-10 px-5 h-[100vh]">
      {userResponse?.aboutMeItems?.map((paragraph, index) => (
        <p
          key={index}
          className="text-gray-300 text-xs sm:text-sm leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default AboutParagraphContent;
