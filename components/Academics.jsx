import { useState, useEffect } from "react";
import experienceStyle from "../styles/Academics.module.css";
import Link from "next/link";
import Line from "./Line";

const Academics = () => {
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
    <div className={experienceStyle.experience} id="curriculo">
      <h1>Curriculo</h1>
      <h2>Educacao academica</h2>

      {isMobile ? (
        <div className={experienceStyle.experience_container}>
          <table>
            <thead>
              <tr>
              <th>Curso</th>
                <th>Instituição</th>
                <th>Periodo</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                course="Mestrado em Tecnologia da Informação"
                institution="International University of Management (IUM)"
                period="2020-2022"
              />
              <TableRow
                course="Licenciatura em Informática e Gestão de Empresas"
                institution="Instituto Superior Politécnico do Lubango"
                period="2014"
              />
              <TableRow
                course="Certificado de Ensino Secundário Sénior"
                institution="Instituto Politécnico do Lubango"
                period="2010"
              />
            </tbody>
          </table>
        </div>
      ) : (
        <div className={experienceStyle.experience_container}>
          <ul className={experienceStyle.experience_container_role}>
      
            <li>Mestrado em Tecnologia da Informação</li>
            <li>Licenciatura em Informática e Gestão de Empresas</li>
            <li>Certificado de Ensino Secundário Sénior</li>
          </ul>
          <ul className={experienceStyle.experience_container_institution}>
 
         
           
            <li>
              <Link href="http://www.ium.edu.na/">
                International University of Management (IUM)
              </Link>
            </li>
            <li>
              <Link href="#">
                Instituto Superior Politécnico do Lubango
              </Link>
            </li>
            <li>
              <Link href="#">Instituto Politécnico do Lubango</Link>
            </li>
          </ul>

          <ul className={experienceStyle.experience_container_period}>
        
           
            <li>2020-2022</li>
            <li>2014</li>
            <li>2010</li>
          </ul>
        </div>
      )}

      <Line />
    </div>
  );
};

// Separate component for table row to make the code cleaner
const TableRow = ({ course, institution, period }) => {
  return (
    <tr >
      <td className={experienceStyle.table_row}>{course}</td>
      <td className={experienceStyle.table_row}>
        <Link href="http://www.ium.edu.na/">{institution}</Link>
      </td>
      <td className={experienceStyle.table_row}>{period}</td>
    </tr>
  );
};

export default Academics;
