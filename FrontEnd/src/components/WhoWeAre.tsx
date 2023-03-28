import { useState } from "react";


export default function Who() {

    const Person = () => {

        const [visible, setVisible] = useState(false);

        return (

            <div className="text-center items-center justify-center p-4" onClick={() => setVisible(!visible)}> 

                <img alt="" id="pic" src={require('../images/poop-emoji.jpg')} className="rounded-full inline-block w-48 origin-top m-1" />

                <h1 className="font-bold"> Cathy Christian </h1> 
                
                <div className={"w-fit flex-wrap " + (visible ? 'flex' : 'hidden') }>
                    <p> Cathy was an air force vet, she worked 1000 years in PM @ Prudential, she has a son who is really smart and also attractive. </p>
                </div>
                
            </div>

        )
    }
    
    return (

        <div id="Board" className="flex flex-row justify-center p-4 bg-slate-300 w-[80%] relative top-4">

            <Person />
            <Person /> 
            
        </div>
      );
}