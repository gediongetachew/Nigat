import { useNavigate } from "react-router-dom";
import CallToActionBtn from "../callToActionBtn";
import BG from "../../assets/order2.svg";
import { ROUTES } from "../../util/data";

const Order = () => {
  const navigate = useNavigate();

  return (
    <article
      className="px-[5%] py-6 relative overflow-hidden h-[80vh] w-full"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-10 flex justify-start">
        <CallToActionBtn
          title="Order Now"
          containerClass={"flex items-center justify-center gap-12"}
          titleClass={"font-bold text-[32px] text-primary pt-1 uppercase"}
          btnClass={
            "bg-primary flex justify-center items-center rounded-2xl w-[72px] h-[70px] cursor-pointer hover:opacity-90"
          }
          onClick={() => navigate(ROUTES[4])}
        />
      </div>

      <section className="lg:w-2/5 h-full mt-[4vh]">
        <h6 className="text-[48px] leading-[52px] lg:text-[96px] font-bold text-primary lg:leading-[106px] uppercase">
          Get youR{" "}
        </h6>
        <h6 className="text-[48px] leading-[52px] lg:text-[96px] font-bold text-primary lg:leading-[106px] uppercase">
          coffee !
        </h6>
        <p className="text-primary text-justify text-2xl leading-7 lg:mt-16">
          Ethiopian coffee experiences that delight the senses while promoting
          sustainable farming practices and community engagement. celebrated for
          our unique Ethiopian blends and commitment to ethical sourcing and
          sustainability.
        </p>
      </section>
    </article>
  );
};

export default Order;
