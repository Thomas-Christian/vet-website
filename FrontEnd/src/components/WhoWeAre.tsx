import { useState } from "react";

const team = [
    {
        "name": "Cathy Christian",
        "image" : "{require('../images/avatar.jpg')}",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },

    {
        "name": "Kristin Zamichieli",
        "image" : "{require('../images/avatar.jpg')}",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
]

const advisors = require('../components/Team/advisors.json')

export default function Who() {

    const Person = ({person}: any ) => {
        
        const [visible, setVisible] = useState(false);

            return (
                <div className="text-center flex flex-col items-center justify-center p-4" onClick={() => setVisible(!visible)}> 
    
                    <img alt="" id="pic" src={require('../images/avatar.jpg')} className="rounded-full inline-flex w-48 origin-top m-1" />
    
                    <h1 className=""> {person.name} </h1> 
                    
                    <div className={"w-48 flex-wrap text-sm " + (visible ? 'flex' : 'hidden') }>
                        <p> {person.about} </p>
                    </div>
                    
                </div>
            )
        
    }
    
    
    return (
        <div className="flex flex-col text-center p-4 bg-slate-500 w-full"> 

        <h1 className="text-xl font-bold"> Founders </h1>
        <div id="founders" className="flex flex-row flex-wrap w-100 justify-center">
            {team.map((item) => (
              <Person person={item} key={item.name} />
            ))
            }   
        </div>
        
        <h1 className="text-xl font-bold"> Advisory Board </h1>
        <div id="advisors" className="flex flex-row w-100 justify-evenly">
            {advisors.map((item: any) => (
                <Person person={item} key={item.name} />
            ))
            }   
        </div>

        </div>
      );
}