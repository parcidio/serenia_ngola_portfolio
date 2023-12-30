//IMPORTS
import {  Meta, Footer } from "../components/ExportComponent"; //importing the navbar and the meta data (head) components
import styles from "../styles/Layout.module.css"; //Layout style

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

      {/* all the components above will be present in all the pages */}
      <div className={styles.container}>
        {/* all the components inse this container will be dynamic to their respective page */}
        <main className={`${styles.main} `}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
