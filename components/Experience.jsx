import { useState, useEffect } from "react";
import experienceStyle from "../styles/Experience.module.css";
import Link from "next/link";
import { Skill } from "./ExportComponent";
import Line from "./Line";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={experienceStyle.experience}>
      <h2>Experiencia</h2>

      {isMobile ? (
        
          <table>
            <thead>
              <tr>
                <th>Função</th>
                <th>Instituição</th>
                <th>Periodo</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                role="Co-Fundadora e Gestora Financeira"
                institution="AKSEU Business Solutions"
                period="2021-2023"
              />
              <TableRow
                role="Mentora Online de Pesquisa"
                institution="Universidade de Tecnologia e Comunicação do Ghana"
                period="2021-2023"
              />
              <TableRow
                role="Tecnica de Informatica"
                institution="Ministério da Agricultura e Florestas de Angola"
                period="2019"
              />
              <TableRow
                role="Assiste de Direção geral"
                institution="Ministério da Agricultura e Florestas de Angola"
                period="2015-2017"
              />
              <TableRow
                role="Co-fundadora, Tecnologia e Marketing"
                institution="Organizaçoës Vanjul, Lda"
                period="2014-2015"
              />
              <TableRow
                role="Finanças e Contabilidade"
                institution="Carangola e Filhos Lda"
                period="2011-2013"
              />
            </tbody>
          </table>
       
      ) : (
        <div className={experienceStyle.experience__container}>
        <ul className={experienceStyle.experience__container__role}>

                
          <li>Co-Fundadora e Gestora Financeira</li>
          <li>Mentora Online de Pesquisa</li>
          <li>Tecnica de Informatica</li>
          <li>Assiste de Direção geral</li>
          <li>Co-fundadora, Tecnologia e Marketing</li>
          <li>Finanças e Contabilidade</li>

        </ul>
        <ul className={experienceStyle.experience__container__institution}>
        
              
          <li>
          <Link target="_black" href="http://www.akseu.net/"> AKSEU Business Solutions</Link>
          </li>
          <li>
            <Link href="#"> Universidade de Tecnologia e Comunicação do Ghana</Link>
          </li>
          <li>
            <Link href="#">Ministério da Agricultura e Florestas de Angola</Link>
          </li>
          <li>
            <Link href="#">Ministério da Agricultura e Florestas de Angola</Link>
          </li>
          <li>
            <Link href="#">Organizaçoës Vanjul, Lda</Link>
          </li>
          <li>
            <Link href="#">Carangola e Filhos Lda</Link>
          </li>
        </ul>
        <ul className={experienceStyle.experience__container__period}>
       
          <li>2021-2023</li>
          <li>2021-2023</li>
          <li>2019</li>
          <li>2015-2017</li>
          <li>2014-2015</li>
          <li>2011-2013</li>
        </ul>
      </div>
      )}

      <Skill />
      <Line />
    </div>
  );
};

// Separate component for table row to make the code cleaner
const   TableRow = ({ role, institution, period }) => {
  return (
    <tr>
      <td className={experienceStyle.table_row}>{role}</td>
      <td className={experienceStyle.table_row}>
        <Link target="_black" href="http://www.akseu.net/">
          {institution}
        </Link>
      </td>
      <td className={experienceStyle.table_row}>{period}</td>
    </tr>
  );
};

export default Experience;
