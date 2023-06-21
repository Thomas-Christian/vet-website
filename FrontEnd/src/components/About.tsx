import Who from "./WhoWeAre";

export default function About() {
    return (
        <div id="About" className="w-[80%] flex flex-col justify-center items-center relative top-5">
    
          <div className="flex flex-col items-center bg-slate-100 w-full"> 
            <h1 className="text-2xl"> About Us:  </h1>

            <div className="p-2 text-center"> 
                <p> Plenty of Veteran Support Organizations have been created to support us, the challenge is finding the right one. Our mission is to help you find them. </p>
            </div>

          </div>

          <Who /> 

        </div>
      );
}