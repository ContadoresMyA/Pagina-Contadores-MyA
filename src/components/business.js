import React from 'react'

function Business() {
  const Titulo={
    AcercaDe:"Acerca de",
    AcercaDeTxt:"Nuestra gestión se realiza desde el ámbito profesional con responsabilidad y altos estándares de calidad, en forma diligente y personalizada. Nuestra experiencia va de la mano con los conocimientos obtenidos en el transcurso de los años y en acompañamiento de excelentes profesionales."
  }
  const Bloques={
    Vision:"Visión",
    VisionTxt:"Ser una empresa líder en el mundo contable y administrativo, con la finalidad de expandirnos hacia diferentes ciudades del país, actualizando e implementando herramientas y conocimientos en cuanto a nuestro servicio y atención a nuestros clientes.",
    Mision:"Misión",
    MisionTxt:"Brindar un servicio integral con la finalidad de ser un apoyo con espíritu empresarial, realizando nuestro trabajo con los mejores estándares de calidad, prácticas y procedimientos adecuados.",
    Valores:"Etica y Valores",
    ValoresTxt:"Es menester informar que nuestros valores institucionales y principios de ética son parte del sistema institucional. La confidencialidad es muy importante para nosotros por lo cual nos comprometemos en custodiar toda información proporcionada por nuestros clientes.",
    NotaPie:"Las partes serán responsables sobre el uso y el manejo de las políticas, procedimientos, documentación escrita, verbal y toda información que abarque el proyecto propuesto." + " La información que se detalla en la presente propuesta es con el fin de dar a conocer nuestros servicios, por lo tanto no debe ser divulgada y entregada a terceros."
  }
  const AcercaDe = "Acerca de"
  const AcercaDeTxt = "Nuestra gestión se realiza desde el ámbito profesional con responsabilidad y altos estándares de calidad, en forma diligente y personalizada. Nuestra experiencia va de la mano con los conocimientos obtenidos en el transcurso de los años y en acompañamiento de excelentes profesionales."
  const Vision = "Visión"
  const VisionTxt = "Ser una empresa líder en el mundo contable y administrativo, con la finalidad de expandirnos hacia diferentes ciudades del país, actualizando e implementando herramientas y conocimientos en cuanto a nuestro servicio y atención a nuestros clientes."
  const Mision = "Misión"
  const MisionTxt = "Brindar un servicio integral con la finalidad de ser un apoyo con espíritu empresarial, realizando nuestro trabajo con los mejores estándares de calidad, prácticas y procedimientos adecuados."
  const Valores = "Etica y Valores"
  const ValoresTxt = "Es menester informar que nuestros valores institucionales y principios de ética son parte del sistema institucional. La confidencialidad es muy importante para nosotros por lo cual nos comprometemos en custodiar toda información proporcionada por nuestros clientes."
  const Historia = "Historia de la empresa"
  const NotaPie = "Las partes serán responsables sobre el uso y el manejo de las políticas, procedimientos, documentación escrita, verbal y toda información que abarque el proyecto propuesto." + " La información que se detalla en la presente propuesta es con el fin de dar a conocer nuestros servicios, por lo tanto no debe ser divulgada y entregada a terceros."
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h1>{Titulo.AcercaDe}</h1>
          <p>{Titulo.AcercaDeTxt}</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <h1>{Bloques.Mision}</h1>
          <p>{Bloques.MisionTxt}</p>
        </div>
        <div className="col">
          <br/>
          <h1>{Bloques.Vision}</h1>
          <p>{Bloques.VisionTxt}</p>
        </div>
        <div className="col">
        <br/>
          <h1>{Bloques.Valores}</h1>
          <p>{Bloques.ValoresTxt}</p>
        </div>
      </div>
      <div className="col">
        <p>{Bloques.NotaPie}</p>
      </div>
    </div>

  )
}

export default Business