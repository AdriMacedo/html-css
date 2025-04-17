import { useState } from "react";

function Form () {

    const [email, setEmail] = useState ("");

    const hangleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Registered Email", email);
        setEmail("");
    }
    return (
        <form onSubmit={hangleSubmit}>
            <input type="email" value={email} onChange={(event)=> setEmail(event.target.value) } placeholder="Sign up for enthralling couch reads" required/>
            <button className="btn subscribe" type="submit" aria-label="">SUBSCRIBE</button>
            </form>
    )
};

export default Form;