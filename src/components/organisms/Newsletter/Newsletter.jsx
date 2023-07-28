import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import 'react-toastify/dist/ReactToastify.css';
import "./Newsletter.css"


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


    function handleSubmit(e){
        e.preventDefault();
        if(!formik.errors.email){
            setIsSubmited(true)
            notify()
            formik.setValues({email: ""})
            formik.setErrors({})

            const options = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json',
                  'api-key': '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'
                },
                body: JSON.stringify({
                  sender: {email: `${formik.values.email}`},
                  name: 'Newsletter CasaVerde',
                  htmlContent: `<!DOCTYPE html> <html> <body> <h1>Olá,</h1> <p>
                  Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e 
                  vai começar a receber e-mails com as novidades de nossa loja e dicas 
                  de como cuidar de suas plantas.
                  Até logo!”</p> </body> </html>`,
                  subject: 'Newsletter CasaVerde!'
                })
              };
              
              fetch('https://api.brevo.com/v3/emailCampaigns', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
        
        setTimeout(() => {
            setIsSubmited(false)
        }, 1000);
    }
    
    return (
        <div className="newsletter">
            <form onSubmit={handleSubmit} className="newsletter__form">
            
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