//IMPORTS
import aboutStyle from "../styles/About.module.css"; //About style
import { useState } from "react";
import Line from "./Line";

const About = () => {
  const [readMore, setReadMore] = useState(true); //this state controls the behavior of the readmore/ readless text
  return (
    <div className={aboutStyle.about__container} id="sobreMin">
      <Line />
      <h1>Sobre mim</h1>

      <p>
        {" "}
        Mestre em Ciências da Tecnologia da Informação, com experiência em projetos de estudo de viabilidade 
        financeira, Gestão e Marketing, Administração de Empresas, Gestão de Projetos e Informática Educacional. 
        Interessada em aumentar os meus conhecimentos em tecnologia nas áreas de desenvolvimento de software, 
        telecomunicações e para web. Me considero uma pessoa criativa e dinâmica, responsável, sociável e com 
        vontade de aprender coisas novas
      </p>
      <p>
        {" "}
        Sou apaixonado por design, pesquisa e tecnologia, e como eles podem convergir para criar experiências que resolvam problemas. Atualmente, estou buscando expandir minha atuação no desenvolvimento web por meio de colaboração com outros profissionais da indústria.
      </p>
      
    </div>
  );
};

export default About;
