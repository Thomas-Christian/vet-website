import {
  faGraduationCap,
  faBriefcase,
  faBrain,
  faHandsHelping,
  faPersonHiking,
  faBellConcierge,
  faList,
  faChevronDown,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(`/companies/${e.currentTarget.id}`);
  };

  const [visible, setVisible] = useState(false)

  return (

    <nav className="bg-slate-200 border-gray-200 p-2 rounded sticky top-0 w-full z-10">

      <div className="flex flex-wrap items-center justify-between mx-auto">

        <a href="/" className="flex items-center justify-center">
          <img src={require('../images/untitled.jpg')} className="h-[4rem] rounded-lg" />
        </a>

        <button
          onClick={() => setVisible(!visible)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faChevronDown}/>
        </button>

        
        <div className={"w-full md:flex md:w-auto " + (visible ? 'block' : 'hidden') } id="navbar-default">

          <ul className="flex flex-row flex-wrap justify-around p-2 mt-4 border border-gray-100 rounded-lg bg-slate-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-200">
          
          <div id="education" className="nav-btn" onClick={handleClick}>
          <FontAwesomeIcon
            icon={ faGraduationCap }
            size="2x"
            className="nav-icon"
          />
          <span className="text-xs"> Education </span>
        </div>

        <div id="employment" className="nav-btn" onClick={handleClick}>
          <FontAwesomeIcon 
            icon={ faBriefcase } 
            size="2x" 
            className="nav-icon" 
            />
          <span className="text-xs"> Employment </span>
        </div>

        <div id="mental health" className="nav-btn" onClick={handleClick}>
          <FontAwesomeIcon
            icon={ faBrain }
            size="2x"
            className="nav-icon"
          />
          <span className="text-xs"> Wellbeing </span>
        </div>

        <div id="community" className="nav-btn" onClick={handleClick}>
          <FontAwesomeIcon
            icon={ faHandsHelping }
            size="2x"
            className="nav-icon"
          />
          <span className="text-xs"> Community </span>
        </div>

        <div id="expeditions" className="nav-btn" onClick={handleClick}>
          <FontAwesomeIcon
            icon={ faPersonHiking }
            size="2x"
            className="nav-icon"
          />
          <span className="text-xs"> Expeditions </span>
        </div>

        <div id="discounts" className="nav-btn" onClick={handleClick}>
          <FontAwesomeIcon
            icon={ faMoneyBillWave }
            size="2x"
            className="nav-icon"
          />
          <span className="text-xs"> Discounts </span>
        </div>
          </ul>

        </div>
      </div>
    </nav>

  );
}
