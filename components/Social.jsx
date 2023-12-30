import { BsInstagram, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import socialStyle from "../styles/Social.module.css";
import Line from "./Line";
import { linkedin, instagram, whatsapp, email, facebook } from "./link";

const Social = () => {
  return (
    <>
      <div className={socialStyle.social_container}>
        <ul className={socialStyle.social_links}>
          <a href={instagram}>
            <li>
              <BsInstagram size={25} target="_blank" rel="noreferrer"/>
            </li>
          </a>
          <a href={facebook}>
            <li>
              <BsFacebook size={25} target="_blank"/>
            </li>
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            <li>x
              <BsWhatsapp size={25} />
            </li>
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" >
            <li>
              <BsLinkedin size={25}  />
            </li>
          </a>
          
          <a href={email} target="_blank" rel="noreferrer">
            <div className={socialStyle.social_contacts}>
              <li>Email</li>
            </div>
          </a>
        </ul>
        <a target="_blank" href="./SERENIA NGOLA-CV PORTUGUES.pdf">
          <ul className={socialStyle.social_contacts}>
            <li>Meu CV</li>
          </ul>
        </a>
      </div>
      <Line />
    </>
  );
};

export default Social;
