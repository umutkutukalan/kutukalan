import type { AboutProps } from "../../pages/About";

const AboutParagraphContent = ({ userResponse }: AboutProps) => {
  return (
    <section className="px-5">
      {userResponse?.aboutMeItems?.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 text-gray-300 text-xs sm:text-sm leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default AboutParagraphContent;
