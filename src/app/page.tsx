import About from "./About/page";
import Categories from "./Categories/page";
import Hero from "./components/hero";
import Contactus from "./contact-us/page";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Categories/>
        <About/>
        <Contactus/>
    </div>
  );
}
