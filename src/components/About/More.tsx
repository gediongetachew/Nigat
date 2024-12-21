import { useNavigate } from "react-router-dom";
import ABOUTBG from "../../assets/about3.svg";
import ABOUTBG2 from "../../assets/about4.svg";
import ABOUTBG3 from "../../assets/about5.svg";
import arrow from "../../assets/icons/arrowblue.svg";

import CallToActionBtn from "../callToActionBtn";
import { ROUTES } from "../../util/data";

const More = () => {
  const navigate = useNavigate();

  return (
    <article
      className="py-[5vh] pl-[5%] lg:px-[8%] lg:pb-20 "
      style={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ABOUTBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="pr-[12%] lg:pr-0">
        <h6 className="text-[36px] lg:text-[96px] uppercase text-secondary font-bold mb-6 lg:mb-0">
          who we are ?
        </h6>
        <section className="flex gap-10 w-full items-start gap-y-10 xl:items-stretch justify-end ">
          <div className="relative lg:w-[70%]">
            <img
              src={ABOUTBG2}
              alt="img"
              className="w-full h-full max-w-[526px] max-h-[542px] block xl:hidden"
            />
            <img
              src={ABOUTBG3}
              alt="img"
              className="w-[90%] ml-[10%] my-4 h-full max-w-[526px] max-h-[542px] block xl:hidden"
            />

            <p className="font-[500] xl:text-justify text-base xl:text-[20px] text-white leading-[22px] mt-8 xl:mt-0 ">
              Ethiopian coffee experiences that delight the senses while
              promoting sustainable farming practices and community engagement.
              celebrated for our unique Ethiopian blends and commitment to
              ethical sourcing and sustainability. Ethiopian coffee experiences
              that delight the senses while promoting sustainable farming
              practices and community engagement. celebrated for our unique
              Ethiopian blends and commitment to ethical sourcing and
              sustainability. Ethiopian coffee experiences that delight the
              senses while promoting sustainable farming practices and community
              engagement. celebrated for our unique Ethiopian blends and
              commitment to ethical sourcing and sustainability.
            </p>
            <img
              src={ABOUTBG3}
              alt="img"
              className="xl:absolute top-[10%] xl:top-[45%] right-0 max-w-[560px] max-h-[301px] hidden xl:block"
            />
          </div>
          <img
            src={ABOUTBG2}
            alt="img"
            className="w-[30%] h-full mt-0  hidden xl:block"
          />
        </section>
      </section>
 
      <div className="flex justify-end mt-8 lg:mt-[10vh] px-[5%]">
        <CallToActionBtn
          title="Order Now"
          containerClass={"flex items-center justify-center gap-12"}
          titleClass={
            "font-bold text-2xl lg:text-[32px] text-white pt-1 uppercase"
          }
          btnClass={
            "bg-white flex justify-center items-center  rounded-2xl w-[62px] h-[62px] lg:w-[72px] lg:h-[70px] cursor-pointer hover:opacity-90"
          }
          onClick={() => navigate(ROUTES[4])}
          img={arrow}
        />
      </div>
    </article>
  );
};  

export default More;
