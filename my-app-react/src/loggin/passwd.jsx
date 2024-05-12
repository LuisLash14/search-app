import { useState } from "react";

export function Password(){
    const [password, setPassword] = useState("");

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    console.log(password);
    return (
        <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
    );
}