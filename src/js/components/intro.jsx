import react from "react";
const name = "john";


const Intro = ({propTitle, lastNameProp})=>{
    return(
        <div>
            <h1>Hi {propTitle}{lastNameProp}</h1>
            <p>this is the home page</p>
        </div>
    )
}

export default Intro