import styles from "../styles/Projects.module.css";
import Line from "./Line";
import Project from "./Project";
import Testimonials from "./Testimonials";

const projects = () => {
  const projects = [
    {
      id: 0,
      name: "Sistema de informação para a gestão pecuária",
      image: "/lfmis.png",
      imageAlt: "DESENVOLVIMENTO DE UM SISTEMA DE INFORMAÇÃO PARA A GESTÃO PECUÁRIA ",
      description:
      "Agricultores enfrentam desafios em seu desejo de fornecer alimentos seguros, criar menos resíduos, gerir melhor os effeitos das pragas, gerenciar melhor as finanças e os recursos agrícolas e proteger melhor o meio ambiente, enquanto mantem um desempenho comercial satisfatório à medida que a população humana e a demanda por produtos agrícolas continuam crescendo. Na tentativa de minimizar esses desafios, esta pesquisa desenvolveu um Sistema de Informação de Gestão de Fazendas Pecuárias...",
      tools: ["PHP ", "JQuery ",  "HTML ", "CSS "],
      inProgress: false,
    },   
   
  ];
  return (
    <div className={styles.projects} id="projectos">
      <h1>Projects</h1>
      <p>Here are some of the most relevant projects I have worked on.</p>
      <div className={styles.projects__container}>
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            image={project.image}
            imageAlt={project.imageAlt}
            description={project.description}
            tools={project.tools}
            inProgress={project.inProgress}
          />
        ))}
      </div>
      
      <Line />
    </div>
  );
};

export default projects;
