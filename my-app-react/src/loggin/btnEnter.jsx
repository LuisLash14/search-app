import { useState } from "react";

export function BtnEnter(){
    const [btn, setBtn] = useState(true);

    const handleFormSubmit = (event) =>{
        console.log("submit");
        event.preventDefault();
    }

    return (
        <button id="btnEnter" type="submit">
            Enter
        </button>
    );
}