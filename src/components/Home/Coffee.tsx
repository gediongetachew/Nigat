import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../util/data";
import coffeeImg from "../../assets/Coffee.png";
import coffeeImg2 from "../../assets/Coffee2.png";
import coffeeImg3 from "../../assets/Coffee3.png";
import coffeeImg4 from "../../assets/Coffee4.png";
import CallToActionBtn from "../../components/callToActionBtn";
export default function Coffee() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col font-trap-Regular py-10 px-2 sm:px-12 gap-10 sm:gap-10 text-[#004F57]">
      <div className="flex flex-col w-[100%] color-[#004F57]">
        <p className=" text-[30px] md:[50px] lg:[55px] xl:text-[64px] text-[#004F57] font-[700] text-nowrap  ">IMPORT COFFEE TYPES</p>
        <p className=" text-[10px] md:text-[15px] lg:text-[20px] xl:text-[20px] font-[500] leading-[12px] md:leading-[25px] w-[100%] sm:[50%]">
          Ethiopia is the origin of coffee (birthplace of coffee) with the wide
          variety of taste profiles depending on the weather and altitude it
          grows. The Ethiopian coffee bean is steeped in a rich history of
          tradition and culture. Ethiopians have been coming toge coffee for
          centuries.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between p-0 lg:p-10">
        <div className="flex flex-col gap-4 w-[100%] sm:w-[45%] ">
          <div className="flex flex-col w-full color-[#004F57] justify-center">
            <p className=" text-[20px] md:text-[25px] lg:text-[30px] xl:text-[36px] font-[700] text-nowrap ">IMPORT COFFEE TYPES</p>
            <p className=" text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px] font-[600] w-[100%]">
              Ethiopia is the origin of coffee (birthplace of coffee) with the
              wide variety of taste profiles depending on the weather and
              altitude it grows. The Ethiopian coffee bean is steeped in a rich
              history of tradition and culture. Ethiopians have been coming toge
              coffee for centuries.
            </p>
          </div>
          <div className="flex gap-4 w-full justify-start">
            <div className="w-[46%]">
              <img
                src={coffeeImg}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="w-[46%]">
              <img
                src={coffeeImg2}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4  w-[100%] sm:w-[45%] mt-5 sm:mt-0">
          <div className="flex flex-col w-full color-[#004F57]">
            <p className=" text-[20px] md:text-[25px] lg:text-[30px] xl:text-[36px] font-[700] ">IMPORT COFFEE TYPES</p>
            <p className=" text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px] font-[600]">
              Ethiopia is the origin of coffee (birthplace of coffee) with the
              wide variety of taste profiles depending on the weather and
              altitude it grows. The Ethiopian coffee bean is steeped in a rich
              history of tradition and culture. Ethiopians have been coming toge
              coffee for centuries.
            </p>
          </div>
          <div className="flex gap-4 justify-start">
            <div className="w-[46%]">
              <img
                src={coffeeImg3}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="w-[46%]">
              <img
                src={coffeeImg4}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end  pr-5">
        <CallToActionBtn
          title="VIEW MORE"
          containerClass={"flex items-center justify-center  gap-8 sm:gap-12"}
          titleClass={"font-[700] text-[25px] sm:text-[32px] text-secondary pt-1"}
          btnClass={
            "bg-secondary flex justify-center items-center rounded-2xl w-[60px] sm:w-[72px] h-[60px]  sm:h-[70px] cursor-pointer hover:opacity-90"
          }
          onClick={() => navigate(ROUTES[1])}
        />
      </div>
    </div>
  );
}
