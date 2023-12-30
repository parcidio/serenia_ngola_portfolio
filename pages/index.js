import styles from "../styles/Home.module.css";
import {
  Header,
  About,
  Social,
  Experience,
  Tools,
  Academics,
  Contact,
  Projects,
} from "../components/ExportComponent";


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Social />
      <Academics />
      <Experience />    
      <Projects/>
      {/* <Contact/> */}
    </div>
  );
}
