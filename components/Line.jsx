import lineStyle from "../styles/Line.module.css";

const Line = ({width}) => {
  return <div className={lineStyle.line} style={{width: `${width}%`}}></div>;
};

export default Line;
