import { useNavigate } from "react-router-dom";
import BG from "../../assets/about1.png";
import BGtwo from "../../assets/about1.png";

import CallToActionBtn from "../callToActionBtn";
import { ROUTES } from "../../util/data";

const About = () => {
  const navigate = useNavigate();
  return (
    <article className="px-[8%] mb-12 mt-20">
      <article className="flex flex-col lg:flex-row justify-between items-center font-trap-Regular gap-x-10 mb-10 ">
        <section className="lg:w-1/2">
          <h6 className="uppercase text-[36px] lg:text-[96px] pb-6 xs: pt-20 text-secondary-light font-[700]">
            who
          </h6>
          <p className="text-lg lg:text-[24px] text-primary font-[500]">
            Ethiopian coffee experiences that delight the senses while promoting
            sustainable farming practices and community engagement. celebrated
            for our unique Ethiopian blends and commitment to ethical sourcing
            and sustainability.
          </p>
          <div
            className="mt-6 rounded-[30px] overflow-hidden  w-full lg:w-4/5 h-[25vh] xs:h-[15vh] lg:h-[25vh]"
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
                backgroundImage: `url(${BGtwo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </section>
        <section className="lg:w-1/2 pt-10 lg:pt-[8rem]">
          <h6 className="uppercase text-[36px] lg:text-[96px] pb-6 text-secondary-light font-[700]">
            we are ?
          </h6>
          <div className="text-lg lg:text-[24px] text-primary font-[500]">
            <p>1. Ethiopian coffee experiences that delight</p>
            <p>
              2. The senses while promoting sustainable farming practices and{" "}
            </p>
            <p>1. Ethiopian coffee experiences that delight</p>
            <p>
              3. Community engagement. celebrated for our unique Ethiopian
              blends and{" "}
            </p>
            <p>4. Commitment to ethical sourcing and sustainability.</p>
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
