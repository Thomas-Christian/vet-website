import Who from "./WhoWeAre";

export default function About() {
    return (
        <div id="About" className="min-w-full flex flex-col justify-center items-center">

          <div className="w-[80%] flex flex-col items-center bg-slate-100">
            <h1 className="text-2xl"> About Us:  </h1>

            <div className="p-2 text-center">
                <p> Plenty of Veteran Support Organizations have been created to support us, the challenge is finding the right one. Our mission is to help you find them. </p>
            </div>

          </div>

          <Who />

        </div>
      );
}