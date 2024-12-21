import { useNavigate } from "react-router-dom";
import BG from "../../assets/about1.png";
import BGtwo from "../../assets/about1.png";

import CallToActionBtn from "../callToActionBtn";
import { ROUTES } from "../../util/data";

const About = () => {
  const navigate = useNavigate();
  return (
    <article className="px-[5%] mb-12 mt-12 w-full">
      <article className="flex flex-col lg:flex-row justify-stretch   font-trap-Regular  mb-10 w-full ">
        <section className="w-full lg:w-1/2 flex flex-col gap-5">
          <h6 className="uppercase text-[36px] lg:text-[64px] pb-6 xs:pt-20 text-secondary-light font-[700]">
            who we are ?
          </h6>
          <p className="text-[15px] md:text-[20px] lg:text-[18px] xl:text-[24px] text-primary font-[500]">
            Ethiopian coffee experiences that delight the senses while promoting
            sustainable farming practices and community engagement. celebrated
            for our unique Ethiopian blends and commitment to ethical sourcing
            and sustainability.
          </p>
          <p className="text-[15px] md:text-[20px] lg:text-[18px] xl:text-[24px] text-primary font-[500]">
            Our name isn't just a word; it's a promise. A promise to be with you
            from the very first sip of the morning, fueling your dreams,
            conversations, and aspirations. With Nigat Coffee, we're not just
            part of your morning; we’re part of your life.
          </p>
        </section>
        <section className="flex w-full lg:w-1/2  justify-center">
          <div
            className="mt-6 rounded-[30px] overflow-hidden  w-full lg:w-[42vw] h-[25vh] xs:h-[30vh] lg:h-[60vh]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${BG})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div
              className="hidden lg:block"
              style={{
                backgroundRepeat: "no-repeat",

                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </section>
      </article>

      <div className=" flex justify-end w-full text-nowrap font-trap">
        <CallToActionBtn
          title="VIEW MORE"
          containerClass={"flex items-center justify-center  gap-8 sm:gap-12"}
          titleClass={"font-[700] text-[25px] sm:text-[32px] text-primary pt-1"}
          btnClass={
            "bg-primary flex justify-center items-center rounded-2xl w-[60px] sm:w-[72px] h-[60px]  sm:h-[70px] cursor-pointer hover:opacity-90"
          }
          onClick={() => navigate(ROUTES[1])}
        />
      </div>
    </article>
  );
};

export default About;
