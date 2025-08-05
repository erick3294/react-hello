import React from "react";


const Soccer = ({team1Prop, team2Prop, team3prop}) => {
    return (
        <div>
            <h1>who is the better team?</h1>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                <label class="form-check-label" for="checkDefault">
                    {team1Prop}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkChecked"></input>
                <label class="form-check-label" for="checkChecked">
                    {team2Prop}
                </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkChecked" ></input>
                    <label class="form-check-label" for="checkChecked">
                        {team3prop}
                    </label>                
            </div>
        </div>
    );
}
export default Soccer;