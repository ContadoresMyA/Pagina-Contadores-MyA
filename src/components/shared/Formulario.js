import React, {useState, useRef} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

const Formulario = () => {
	const form1 = useRef();
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	const sendEmail = (nombre, mensaje, correo) => {
		emailjs.send('service_nnrhnl2', 'template_rbj0zmp', {nombre,mensaje,correo}, 'BV3Qm07bNna9sVjVH')
		.then((result) => {
			console.log(result.text);
			console.log('Formulario enviado');
			
		}, (error) => {
			console.log('Formulario no enviado');
			console.log(error.text);
		});
	}
	  
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
					mensaje:''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores,{ resetForm }) => {
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
					sendEmail(valores.nombre,valores.mensaje,valores.correo)
					resetForm();
	
				}}
			>
				{({errors} ) => (
					<Form className="formulario"  >
						<div ref={form1}>
							<label htmlFor="nombre">Nombre</label>
							<Field 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Escribe el mensaje de tu correo" />
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default Formulario;