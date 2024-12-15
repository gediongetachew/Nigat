import Order from "../components/Home/Order";
import Hero from "../components/service/Hero";
import More from "../components/service/More";
import ServicesComp from "../components/service/Services";

const Services = () => {
  return (
    <article className=" font-trap-Regular">
     
      <Hero />
      <ServicesComp />
      <More />
      <Order />
    </article>
  );
};

export default Services;
