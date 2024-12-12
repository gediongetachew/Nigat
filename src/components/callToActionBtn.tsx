
import arrow from "../assets/icons/arrowright.svg"

const CallToActionBtn = ({
  title,
  containerClass,
  titleClass,
  btnClass,
  onClick,
  img
}: {
  title: string;
  containerClass: string;
  titleClass: string;
  btnClass: string;
  onClick: () => void;
  img?: any
}) => {
  return (
    <section className={containerClass}>
      <p className={titleClass}>{title}</p>
      <button className={btnClass} onClick={onClick}>
        <img src={img ? img : arrow} alt="arrow" className="" />
      </button>
    </section>
  );
};

export default CallToActionBtn;
