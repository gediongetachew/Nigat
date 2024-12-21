import Hero from "../components/About/Hero";
import Import from "../components/About/Import";
import Mission from "../components/About/MIssion";
import More from "../components/About/More";
import Order from "../components/Home/Order";

const About = () => {
  return (
    <article className="font-trap-Regular">
    

      <Hero />
      <More />
      <Mission />
       <Import />
      <Order />
    </article>
  );
};

export default About;
