import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Newsletter.css"

export default function Newsletter(){
    const [email, setEmail] = useState("");

    const notify = () => toast.success(`
     Obrigado pela sua assinatura!
     Você receberá nossas 
     novidades no e-mail ${email}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }   
        );

    function handleSubmit(e){
        e.preventDefault();
        setEmail("");
        notify()
    }
    
    return (
        <div className="newsletter">
            <form onSubmit={handleSubmit} className="newsletter__form">
                <label className="newsletter__label">
                    <input
                        className="newsletter__input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder= {`Insira seu email`}
                    />
                </label>
                <button className="newsletter__button">Assinar a newsletter</button>
            </form>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>     
    )
}