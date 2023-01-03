import React from 'react'
import Formulario from './shared/Formulario';

function Contact() {
    const redesSociales={
        Redes:"Redes sociales",
        Red1:"Facebook",
        Red1Link:"https://www.facebook.com/people/Outsourcing-Contable-MA/100063533055046/?modal=admin_todo_tour",
        Red1Pad:"./Images/facebook.png",
        Red1Txt:"Contactanos en Facebook",
        Red2:"Linkedin",
        Red2Link:"http://www.linkedin.com/in/ximena-moya-91223859",
        Red2Pad:"./Images/link.png",
        Red2Txt:"Contactanos en Linkedin",
        Red3:"Whatsapp",
        Red3Link:"https://wa.me/+593984641093?text=Hola Contadores, me gustaría mas información sobre sus servicios",
        Red3Pad:"./Images/Whatsapp.png",
        Red3Txt:"Escribenos por whatsapp",
        contacto:"Nosotros te contactamos"
    }
    return (
        <div className="container-fluid">
            <div className="container text-center">
                <div className="row align-items-start">
                    <h1>{redesSociales.Redes}</h1>
                    <div className="col">
                        <h3>{redesSociales.Red1}</h3>
                        <a href={redesSociales.Red1Link} target="_blank"><img src={redesSociales.Red1Pad} width="20%" /></a>
                        <div className="container">
                            <p>{redesSociales.Red1Txt}</p>

                        </div>

                    </div>
                    <div className="col">
                        <h3>{redesSociales.Red2}</h3>
                        <a href={redesSociales.Red2Link} target="_blank"><img src= {redesSociales.Red2Pad}width="20%" /></a>
                        <div className="container">
                            <p>{redesSociales.Red2Txt}</p>

                        </div>

                    </div>
                    <div className="col">
                        <h3>{redesSociales.Red3}</h3>
                        <a href={redesSociales.Red3Link} target="_blank"><img src={redesSociales.Red3Pad} width="20%" /></a>
                        <div className="container">
                            <p>{redesSociales.Red3Txt}</p>

                        </div>
                    </div>
                    <br />
                    <div className="container px-4 text-center">
                        <div className="row">
                            <div className="col" style={{ margin: 'auto' }}>
                                <h1>{redesSociales.contacto}</h1>
                                <Formulario />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact