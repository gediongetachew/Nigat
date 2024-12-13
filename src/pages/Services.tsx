import Order from "../components/Home/Order";
import Hero from "../components/service/Hero";
import More from "../components/service/More";
import ServicesComp from "../components/service/Services";

const Services = ({
  showMenu,
  showSideContent,
}: {
  showMenu: boolean;
  showSideContent: boolean;
}) => {
  return (
    <article className=" font-trap-Regular">
     
      <Hero showMenu={showMenu} showSideContent={showSideContent} />
      <ServicesComp showMenu={showMenu} showSideContent={showSideContent} />
      <More />
      <Order />
    </article>
  );
};

export default Services;
