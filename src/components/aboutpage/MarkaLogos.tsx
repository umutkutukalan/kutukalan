import { sabirotologo } from "../../utils";

const MarkaLogos = () => {
  return (
    <section className="py-0 lg:py-5">
      <div className="tech-marquee">
        <ul className="tech-marquee-track">
          <li>
            <img src={sabirotologo} alt="" className="w-50"/>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MarkaLogos;
