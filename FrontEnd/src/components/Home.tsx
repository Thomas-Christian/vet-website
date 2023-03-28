import About from "./About";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <div id="Home" className="flex flex-col z-0 fixed min-w-full">

      <div id="screen" className="min-h-screen top-0 flex flex-col items-center justify-center bg-scroll bg-hero bg-center bg-repeat -z-20"> 


      <Navigation /> 

      <About /> 

      
      </div>
    </div>
  );
}
