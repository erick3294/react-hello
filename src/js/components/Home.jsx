import react from 'react';
import Intro from './intro'
import Soccer from './soccer'



const name = "erick";
const team1 = "Manchester"
const team2 = "Real Madrid"
const team3 = "Chelsea"

const myArray = ["names","ronaldo","messi"]

const Home = ()=>{
    return(
        <div>
            {myArray.map(
                (name)=>{
                    return(
                        <div>
                            {name}
                        </div>
                    )
                }
            )}
           <Soccer 
           team1Prop={team1} 
           team2Prop={team2} 
           team3prop={team3} />
        </div>
    )
} 


export default Home