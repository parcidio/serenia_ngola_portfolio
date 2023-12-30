// IMPORTS
import { Nav,  } from "../components/ExportComponent"; //importing the navbar and the meta data (head) components

import Image from "next/image"; // importing next image component
import headerStyle from "../styles/Header.module.css"; //Header style

const Header = () => {
  return (
    <div className={headerStyle.header__container}>
     
        <Image
          className={`${headerStyle.header__image} md `}
          src="/serenia.jpg"
          alt="Profile picture"
        
          width={200}
          height={200}
        />
     
      <div className={headerStyle.header__text}>
        <h1>Serenia Ngola</h1>
        <small>Enginheira de TI</small>
      </div>
      <Nav />
    
      
    </div>
  );
};

export default Header;
