import { useState } from "react";

const team = [
    {
        "name": "Cathy Christian",
        "image" : "{require('../images/poop-emoji.jpg')}",
        "about" : "Cathy was an air force vet, she worked 1000 years in PM @ Prudential, she has a son who is really smart and also attractive."
    },

    {
        "name": "Not Cathy Christian",
        "image" : "{require('../images/poop-emoji.jpg')}",
        "about" : "Cathy was an air force vet, she worked 1000 years in PM @ Prudential, she has a son who is really smart and also attractive."
    }
]


export default function Who() {

    const Person = ({person}: any ) => {

        const [visible, setVisible] = useState(false);

            return (
                <div className="text-center items-center justify-center p-4" onClick={() => setVisible(!visible)}>
                    <img alt="" id="pic" src={require('../images/poop-emoji.jpg')} className="rounded-full inline-block w-48 origin-top m-1" />

                    <h1 className="font-bold"> {person.name} </h1>

                    <div className={"w-48 flex-wrap " + (visible ? 'flex' : 'hidden') }>
                        <p> {person.about} </p>
                    </div>

                </div>
            )

    }

    return (

        <div id="Board" className="flex flex-row justify-center p-4 bg-slate-300 w-[80%] relative top-4">

            {team.map((item) => (
              <Person person={item} key={item.name} />
            ))
            }

        </div>
      );
}