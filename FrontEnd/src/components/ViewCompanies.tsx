import { faAngry } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard, faBaby, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";

export default function ViewCompanies() {
  const params = useParams();
  const [organizationsCategory, setOrganizationsCategory] = useState(
    [] as any[]
  );

  // FETCHING DATA & SETTING STATE
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/api/organizations/${params.category}`
      );
      const data = await response.json();
      setOrganizationsCategory(data);
    };
    fetchData();
  }, [setOrganizationsCategory, params ]);

  const RenderOrg = ({ item }: any) => {

    const [hasRating, setRating] = useState(false);

    // RATING AN ORG
    const handleRating = (
      item: any,
      e: React.MouseEvent<HTMLButtonElement>
    ) => {
      console.log(e.currentTarget.value);

      let userRating = e.currentTarget.value;

      if (!hasRating) {
        fetch(`http://localhost:5000/api/organizations/${item._id}`, {
          method: "PUT",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userRating: userRating,
          }),
        });

        item.totalRating = item.totalRating + 1

        setRating(true);
      }
    };

    let averageRating = Math.round(item.rating / item.totalRatings).toFixed(1);

    return (
      <div className="border-neutral-20 border rounded-lg bg-slate-300 shadow-md h-[30rem] md:h-[40rem] m-4 w-64 md:w-96 text-center">
        <div className="p-2 flex flex-col items-center justify-between h-full">
          <h2 className="text-lg font-bold text-secondary font-secondary w-full text-center p-2 capitalize">
            {item.name}
          </h2>

          <img
            className="object-fill object-bottom h-36 w-36 md:h-48 md:w-48 rounded-lg m-2 drop-shadow-lg"
            src={`${item.image}`}
            alt=""
          />

          <p className="mt-1 font-normal italic text-sm md:text-lg">
            {item.mission}
          </p>

          <a
            className="text-cyan-500 underline"
            target={"blank"}
            rel={"noopener noreferrer"}
            href={`${item.website}`}
          >
           
            Website
          </a>

          <div id="rating" className="flex flex-col items-center static bottom-1 bg-slate-500 m-1 p-2 rounded-xl"> 

                    { averageRating && <p className="text-s"> Average Rating : {averageRating} <FontAwesomeIcon className="text-slate-700" icon={faStar}/> </p> }

                    <p className="pt-2 text-s"> Your Rating </p>

                    { hasRating ? <div> Thanks for your input </div> : 
                    
                    <div className="flex flex-row">

                     <button value={1} onClick={(e : React.MouseEvent<HTMLButtonElement>) => handleRating(item, e)}>
                      <FontAwesomeIcon className="text-amber-300 p-1" icon={faStar} /> 
                     </button>
    
                     <button value={2} onClick={(e : React.MouseEvent<HTMLButtonElement>) => handleRating(item, e)}>
                      <FontAwesomeIcon className="text-amber-300 p-1" icon={faStar} /> 
                     </button>
    
                     <button value={3} onClick={(e : React.MouseEvent<HTMLButtonElement>) => handleRating(item, e)}>
                      <FontAwesomeIcon className="text-amber-300 p-1" icon={faStar} /> 
                     </button>
    
                     <button value={4} onClick={(e : React.MouseEvent<HTMLButtonElement>) => handleRating(item, e)}>
                      <FontAwesomeIcon className="text-amber-300 p-1" icon={faStar} /> 
                     </button>
    
                     <button value={5} onClick={(e : React.MouseEvent<HTMLButtonElement>) => handleRating(item, e)}>
                      <FontAwesomeIcon className="text-amber-300 p-1" icon={faStar} /> 
                     </button>
                    </div>}
                    
                        
          </div>

        </div>
      </div>
    );
  };

  return (
    <div
      id="screen"
      className="flex flex-col min-h-screen items-center bg-scroll bg-hero bg-center bg-repeat -z-20"
    >
      <Navigation />

      <div id="companies" className="flex flex-col items-center">
        

        <h1
          id="logo"
          className="md:text-7xl sm:text-5xl text-4xl tracking-wide text-center font-bold text-primary p-3 capitalize"
        >
          {params.category} Organizations
        </h1>

        {/* <div className="text-center border-neutral-20 border rounded-lg bg-slate-300 shadow-md m-2 fixed left-12 bottom-0 md:bottom-12" id="legend">
          <h1 className="bold text-lg"> Legend </h1>

          <div className="flex flex-row">
            <div className="p-1">
              <FontAwesomeIcon icon={faAngry} />
              <span> -Blah </span>
            </div>

            <div className="p-1">
              <FontAwesomeIcon icon={faBaby} />
              <span> -Meh </span>
            </div>
          </div>
        </div> */}

        <div
          id="organizationsContainer"
          className="h-full flex flex-wrap flex-row justify-evenly items-center p-1"
        >
          {organizationsCategory &&
            organizationsCategory.map((item) => (
              <RenderOrg item={item} key={item.name} />
            ))}
        </div>
      </div>
    </div>
  );
}
