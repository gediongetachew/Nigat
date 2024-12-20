import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Order from "../components/Home/Order";
import Images from "../components/Home/Images";
import Coffee from "../components/Home/Coffee";


const Home = () => {
 

  return (
    <main>
   
      <Hero />

      <About />
      <Images />
      <Coffee />
      <Services />

      <Order />
    </main>
  );
};

export default Home;
