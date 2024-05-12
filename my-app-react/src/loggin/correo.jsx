import { useState } from 'react'

export function Correo({onDatoChange}){
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
        onDatoChange(event.target.value)
    }
    console.log(email);
    return (
        <label>
            Correo:
            <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
    );
}