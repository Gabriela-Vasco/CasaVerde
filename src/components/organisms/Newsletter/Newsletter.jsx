import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import "./Newsletter.css";


function useFormik({initialValues, validate}){
    const [touched, setTouchedFields] = useState({});
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validateValues(values); 
    }, [values])


    function handleChange(event){

        const fieldname = event.target.getAttribute('name');
        const { value } = event.target;
        setValues({...values, [fieldname]: value});   
    }

    function handleBlur(event) {
        const fieldName = event.target.getAttribute('name');
        setTouchedFields({
          ...touched,
          [fieldName]: true,
        })
      }

    function validateValues(values) {
        setErrors(validate(values));
    }

    return {
        values,
        errors,
        touched,
        setValues,
        handleBlur,
        setErrors,
        handleChange,
    }
}

export default function Newsletter(){
    const [isSubmited, setIsSubmited] = useState(false);
    const form = useRef();

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: function (values) {
            const errors = {};
    
            if(!isSubmited && !values.email.includes('@')){
                errors.email = "Por favor, insira um e-mail válido"
            }
    
            return errors;
        }
    })

    const notify = () => toast.success(`
     Obrigado pela sua assinatura!
     Você receberá nossas 
     novidades no e-mail ${formik.values.email}`, {
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
        const service = import.meta.env.VITE_SERVICE;
        const template = import.meta.env.VITE_TEMPLATE;
        const user = import.meta.env.VITE_PUBLIC_KEY;

        function sendEmail(e) {
            emailjs.sendForm(service, template, e.target, user)
            .then((result) => {
                console.log(result.text + "Email enviado com sucesso!");
            }, (error) => {
                console.log(error.text);
            });
        }    


    function handleSubmit(e){
        e.preventDefault();
        if(!formik.errors.email){
            setIsSubmited(true)
            notify()
            formik.setValues({email: ""})
            formik.setErrors({})

        }

        sendEmail(e)
        
        setTimeout(() => {
            setIsSubmited(false)
        }, 1000);
    }
    
    return (
        <div className="newsletter">
            <form ref={form} onSubmit={handleSubmit} className="newsletter__form">
            
                <label className="newsletter__label">
                    <input
                        className="newsletter__input"
                        type="text"
                        name="email"
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder= {`Insira seu email`}
                        />
                </label>
                <button className="newsletter__button">Assinar a newsletter</button>
            </form>
            {formik.touched.email && formik.errors.email && <p className="newsletter__form__error">{formik.errors.email}</p>}
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