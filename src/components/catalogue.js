import React from 'react'
import Formulario from './shared/Formulario';

function Catalogue() {
    const Titulo = {
        TiposDeServicio: "Nuestros servicios",
        textoTipoServicio: "Nuestra gestión se  realiza desde el ámbito profesional con responsabilidad y altos estándares de calidad, en forma  diligente y personalizada. Nuestra experiencia va de la mano con los conocimientos obtenidos en el transcurso de los  años y en acompañamiento de excelentes profesionales.",
        contacto: "Contactanos"
    }
    const servicio1 = "Asesoría Contable"
    const servicio1Items = {
        1: "Plan de negocios",
        2: "Flujo de efectivo",
        2: "NIFF, NIC",
        3: "Análisis de cartera, Gestión cobranza",
        4: "Elaboración de presupuestos",
        5: "Consolidación de Estados contables",
        6: "Análisis de estados financieros"
    };
    const servicio2 = "Asesoría Tributaria"
    const servicio2Items = {
        1: "Impuestos a la renta",
        2: "(Personas naturales, obligadas y sociedades)",
        3: "Manejo de retenciones en la fuente",
        4: "Declaraciones IVA",
        5: "Anexos",
        6: "Devolución IVA tercera edad y discapacitados"
    }
    const servicio3 = "Asesoría Laboral"
    const servicio3Items = {
        1: "Contratos de trabajo",
        2: "Avisos de entrada y salida",
        3: "Ministerio de trabajo",
        4: "Manejo de nómina",
        5: "IESS",
        6: "Jubilaciones",
        7: "Afiliaciones",
        8: "Beneficios sociales"
    }
    const servicio4 = "Gestión Empresas y Microempresas"
    const servicio4Items = {
        1: "Constitución sociedades, sucursales y representaciones",
        2: "Registro ante los organismos correspondientes a nivel societario",
        3: "Desarrollo de procedimientos administrativos contables",
        4: "Modificaciones estatutarias, extincion de sociedades"
    }
    const servicio5Completo = "Auditoría"
    const Auditoria = {
        1: "Auditoría de estados financieros",
        2: "Procedimientos convenidos"
    }
    const servicio5 = "Riesgos"
    const riesgos = {
        1: "Auditoria interna",
        2: "Gestión de riesgos",
        3: "Forense"
    }
    const servicio6 = "Seguridad Industrial"
    const servicio6Items = {
        1: "Implementación de sistemas de gestión de servicio, salud y medio ambiente",
        2: "Capacitación y certificaciones especiales de seguridad industrial",
        3: "Legislación y regulación laboral (MDT, MSP, MAE. IESS, ARCH)",
        4: "Investigación de accidentes y enfermedades profesionales",
        5: "Proveedores de equipos de protección personal (EPP)",
        6: "Proveedores de equipos de seguridad industrial",
        7: "Extintores y sistemas contra incendio y equipos de emergencia"
    }
    return (
        <div className="container px-4 text-center">
            <div className="row gx-5" style={{ margin: 'auto' }}>
                <br />
                <h1>{Titulo.TiposDeServicio}</h1>
                <br />
                <p>{Titulo.textoTipoServicio}</p>
                <div className="col">
                    <div className="p-3 border bg-light">
                        <h2>{servicio1}</h2>
                        <ul>
                            <li><p>{servicio1Items[1]}</p></li>
                            <li><p>{servicio1Items[2]}</p></li>
                            <li><p>{servicio1Items[3]}</p></li>
                            <li><p>{servicio1Items[4]}</p></li>
                            <li><p>{servicio1Items[5]}</p></li>
                            <li><p>{servicio1Items[6]}</p></li>
                        </ul>
                    </div>

                </div>
                <div className="col">
                    <div className="p-3 border bg-light">
                        <h2>{servicio2}</h2>
                        <ul>
                            <li><p>{servicio2Items[1]}</p></li>
                            <li><p>{servicio2Items[2]}</p></li>
                            <li><p>{servicio2Items[3]}</p></li>
                            <li><p>{servicio2Items[4]}</p></li>
                            <li><p>{servicio2Items[5]}</p></li>
                            <li><p>{servicio2Items[6]}</p></li>
                        </ul> </div>

                </div>
                <div className="col">
                    <div className="p-3 border bg-light">
                        <h2>{servicio3}</h2>
                        <ul>

                            <li><p>{servicio3Items[1]}</p></li>
                            <li><p>{servicio3Items[2]}</p></li>
                            <li><p>{servicio3Items[3]}</p></li>
                            <li><p>{servicio3Items[4]}</p></li>
                            <li><p>{servicio3Items[5]}</p></li>
                            <li><p>{servicio3Items[6]}</p></li>
                        </ul>
                    </div>
                </div>

            </div>
            <br />
            <div className="row gx-5" style={{ margin: 'auto' }}>
                <div className="col" >
                    <div className="p-3 border bg-light" >
                        <h2>{servicio4}</h2>
                        <ul>
                            <li><p>{servicio4Items[1]}</p></li>
                            <li><p>{servicio4Items[2]}</p></li>
                            <li><p>{servicio4Items[3]}</p></li>
                            <li><p>{servicio4Items[4]}</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light">
                        <h2>{servicio5Completo}</h2>
                        <ul>
                            <li><p>{Auditoria[1]}</p></li>
                            <li><p>{Auditoria[2]}</p></li>
                        </ul>
                        <h2>{servicio5}</h2>
                        <ul>
                            <li><p>{riesgos[1]}</p></li>
                            <li><p>{riesgos[2]}</p></li>
                            <li><p>{riesgos[3]}</p></li>
                        </ul>

                    </div>
                </div>

            </div>
            <br />
            <div className="row gx-5">
                <div className="col-8" style={{ margin: 'auto' }}>
                    <div className="p-3 border bg-light">
                        <h2>{servicio6}</h2>
                        <ul>
                            <li>
                                <p>{servicio6Items[1]}</p></li>
                            <li><p>{servicio6Items[2]}</p></li>
                            <li><p>{servicio6Items[3]}</p></li>
                            <li><p>{servicio6Items[4]}</p></li>
                            <li><p>{servicio6Items[5]}</p></li>
                            <li><p>{servicio6Items[6]}</p></li>
                            <li><p>{servicio6Items[7]}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="container px-4 text-center">
                <div className="row">
                    <div className="col" style={{ margin: 'auto' }}>
                        <h1>{Titulo.contacto}</h1>
                        <Formulario />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogue