import Line from "./Line";
import skillsStyle from "../styles/Skills.module.css";
import Link from "next/link";

const SkillItem = ({name, percentage})=>(
<li className={skillsStyle.skills__with__progress}>
  <div className={skillsStyle.skills__legend}><div>{name}</div><div>{percentage}%</div></div>
  <Line width={percentage}/>
</li>
)

const SkillsCard = ({ skill }) => {
  return (
      <div className={skillsStyle.skills__card}>
          {skill}
      </div>
  );
};
  const SkillChips = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', "Comunicação efetiva",
    "Liderança",
    "Pensamento crítico",  "Marketing" ];

    return (
        <div className={skillsStyle.skills__container__card}>
            {skills.map((skill, index) => (
                <SkillsCard key={index} skill={skill} />
            ))}
        </div>
    );
};
const Skill = () => {
  return (
    <div className={skillsStyle.skills}>
      <h2>Habilidades</h2>
    
      <div className={skillsStyle.skills__container}>
        <ul className={skillsStyle.skills__container__role}>
          
          <SkillItem name={"English"} percentage={90}/>
          <SkillItem name={"Português"} percentage={100}/>
          <SkillItem name={"Pensamento Critico"} percentage={80}/>
          <SkillItem name={"Pesquisa metodológica"} percentage={90}/>
          <SkillItem name={"Excel (Avançado)"} percentage={70}/>
          <SkillItem name={"Gestão de Projecto (Avançado)"} percentage={90}/>
        </ul>
         
        <div >
        <SkillChips/>
        </div>
        
      </div>
  
    </div>
  );
};

export default Skill;
