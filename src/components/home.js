import React from 'react';
import Card from './Card';

function Home() {
  const imagenesBanner={
    banner1Img: "./Images/banner1.jpeg",
    banner2Img: "./Images/banner2.jpeg",
    banner3Img: "./Images/banner3.jpeg"
  }
  const infoServicio={
    InformacionDelNegocio: "Información acerca de la actividad del negocio",
    TextoInformacionNegocio:"Trabajamos de manera integral, ofrecemos a nuestros clientes servicios profesionales en materia de Asesoría Tributaria, Contabilidad, Administración, Auditorías, Asesoría Municipal, laboral, Seguridad Ocupacional e Importaciones.",
    NegocioImg:"./Images/fi1.jpeg"
  }
  const servicioExterno = {
    InformacionDelServicio: "Beneficios de un servicio externo",
    InformacionServicio: "Por qué confiar en un sistema outsourcing y que beneficios tiene, pues si bien es cierto puede contratar los servicios de un colaborador  in-house, pero la sinergia laboral a cambiado por varios motivos globales sean estos externos o internos en cuanto al modelo productivo del país. optimizado recursos como:",
    ServicioImg: "./Images/fi2.jpeg",
    literales: [
      "Mayor rentabilidad",
      "Cuenta con  mayor tiempo para el control interno de la empresa",
      "Profesionales a la vanguardia para desempeñar funciones puntuales sin necesidad de contratar bajo dependencia.",
      "Gestión integral",
      "Menos carga laboral",
      "Ambiente físico laboral inadecuado que afecta en la salud mental y física ocasionando inconvenientes de salud.",
      "Relaciones laborales insatisfechas."
    ]
  }
  const Noticias={
    TituloNoticias:"Noticias Actuales",
    ImagenNoticia1:"./Images/not1.jpeg",
    TituloNoticia1:"Calendario tributario",
    DescripcionNoticia1:"",
    ImagenNoticia2:"./Images/not2.jpeg",
    TituloNoticia2:"Impuesto a la renta",
    DescripcionNoticia2:""
  }
  return (
    <div className="App">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagenesBanner.banner1Img} className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={imagenesBanner.banner2Img} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={imagenesBanner.banner3Img} className="d-block w-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <br />
            <img className="imagen1"src={infoServicio.NegocioImg} width="70%"/>
          </div>
          <div className="col">
            <br />
            <h1 className='titulo1'>{infoServicio.InformacionDelNegocio}</h1>
            <p>{infoServicio.TextoInformacionNegocio}</p>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <br />
            <h1 className='titulo2'>{servicioExterno.InformacionDelServicio}</h1>
            <p className='texto2'>{servicioExterno.InformacionServicio}</p>
            <ul className='literales-home'>
              <li><p>{servicioExterno.literales[0]}</p></li>
              <li><p>{servicioExterno.literales[1]}</p></li>
              <li><p>{servicioExterno.literales[2]}</p></li>
              <li><p>{servicioExterno.literales[3]}</p></li>
              <li><p>{servicioExterno.literales[4]}</p></li>
              <li><p>{servicioExterno.literales[5]}</p></li>
              <li><p>{servicioExterno.literales[6]}</p></li>
            </ul>
          </div>
          <div className="col">
            <br />
            <img src={servicioExterno.ServicioImg}  className='centrada'/>
          </div>
        </div>
        <br />
        <h1>{Noticias.TituloNoticias}</h1>
        <div className="row align-items-start">
          <div className="col">
            <br/>
            <Card imagen={Noticias.ImagenNoticia1} titulo={Noticias.TituloNoticia1} descripcion={Noticias.DescripcionNoticia1}/>
          </div>
          <div className="col">
          <br/>
            <Card imagen={Noticias.ImagenNoticia2} titulo={Noticias.TituloNoticia2} descripcion={Noticias.DescripcionNoticia2}/>
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default Home


