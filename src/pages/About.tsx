import Hero from "../components/About/Hero";
import Mission from "../components/About/MIssion";
import More from "../components/About/More";
import Order from "../components/Home/Order";

const About = ({
  showMenu,
  showSideContent,
}: {
  showMenu: boolean;
  showSideContent: boolean;
}) => {
  return (
    <article className="font-trap-Regular">
    

      <Hero showMenu={showMenu} showSideContent={showSideContent} />
      <More />
      <Mission />

      <Order />
    </article>
  );
};

export default About;
