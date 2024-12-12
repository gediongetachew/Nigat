import { MissionHeroItems } from "../../util/data";

import BG from "../../assets/services8.svg";

const Mission = () => {
  return (
    <article
      className="bg-secondary text-white pl-[5%] pt-[5vh] pb-[10vh] pr-[10%] lg:pr-[8%] h-[120vh] lg:h-[80vh] xl:h-[70vh]"
      style={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <article className="flex flex-col lg:flex-row items-stretch gap-y-40 justify-between">
        <section className="lg:w-[42%]">
          <h6 className="font-bold text-[48px] lg:text-[64px] uppercase">
            Mission
          </h6>
          <p className="text-justify text-xl leading-[22px] lg:pr-[10%] font-[500]">
            To celebrate and share Ethiopia’s rich coffee heritage with the
            world by delivering exceptional coffee experiences, fostering
            connections, and promoting sustainability from farm to cup.
          </p>
        </section>
        <section className="lg:w-[42%] mt-12 ">
          <h6 className="font-bold text-[48px] lg:text-[64px] uppercase">
            Vision
          </h6>
          <p className="font-[500] text-justify text-xl leading-[22px] lg:pr-[10%]">
            To become a global leader in Ethiopian coffee, recognized for our
            commitment to quality, innovation, and cultural authenticity, while
            enriching lives and mornings everywhere.
          </p>
        </section>
      </article>

      <section className="lg:grid lg:grid-cols-3 justify-between items-stretch mt-[5vh] gap-16 lg:gap-4 w-full">
        {MissionHeroItems.map((item) => (
          <section
            key={item.id}
            className="border border-white text-white lg:pb-8 rounded-[20px] flex-shrink-0 px-3 pt-3 lg:p-6 mb-8 lg:mb-0"
          >
            <div className="flex justify-start items-start gap-4 mb-6">
              <img src={item.icon} alt={item.id} className="mt-1" />

              <h6 className="font-bold text-xl lg:text-[30px] xl:text-[40px] capitalize leading-[44px]">
                {item.title}
              </h6>
            </div>
            <p className="font-[400] ml-16 text-xl hidden lg:block">{item.text}</p>
          </section>
        ))}
      </section>
    </article>
  );
};

export default Mission;
