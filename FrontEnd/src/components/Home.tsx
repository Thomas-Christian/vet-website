import About from "./About";
import Navigation from "./Navigation";

export default function Home() {
  return (

      <div id="screen" className="min-h-screen min-w-screen flex flex-col items-center bg-scroll bg-hero bg-center bg-repeat -z-20">

      <Navigation />

      <About />

      </div>

  );
}
