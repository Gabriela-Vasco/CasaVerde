import { useState } from "react";
import "./Newsletter.css"

export default function Newsletter(){
    const [email, setEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        alert(`O email ${email} foi cadastrado com sucesso!`);
    }
    
    return (
        <div className="newsletter">
            <form onSubmit={handleSubmit} className="newsletter__form">
                <label className="newsletter__label">
                    <input 
                        className="newsletter__input"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder= {`Insira seu email`}
                    />
                </label>
                <button className="newsletter__button">Assinar a newsletter</button>
            </form>
        </div>     
    )
}