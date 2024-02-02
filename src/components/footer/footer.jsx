import styles from "./footer.module.css";
import Logo from "../../assets/img/logo-meta.svg";
import faceIcon from "../../assets/img/insta.svg";
import instaIcon from "../../assets/img/face.svg";
import twitterIcon from "../../assets/img/x.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div>
            <img className={styles.FooterLogo} src={Logo} alt="" />
            <span className={styles.FooterP}>
              React também é uma arquitetura. Os frameworks que o implementam
              permitem buscar dados em componentes assíncronos que são
              executados no servidor ou mesmo durante a construção.
            </span>
          </div>
          <div className={styles.WrapperlistUl}>
            <div className={styles.containerUl}>
              <ul>
                <li><a className={styles.footerTitle} href="">Aprenda a React</a></li>
                <li><a className={styles.footerA} href="">Começo rápido</a></li>
                <li><a className={styles.footerA} href="">Instalação</a></li>
                <li><a className={styles.footerA} href="">Descrevendo a IU</a></li>
              </ul>
            </div>
            <div className={styles.containerUl}>
              <ul>
                <li><a className={styles.footerTitle} href="">Referência de API</a></li>
                <li><a className={styles.footerA} href="">APIs de React</a></li>
                <li><a className={styles.footerA} href="">APIs de React</a></li>
                <li><a className={styles.footerA} href="">Descrevendo a IU</a></li>
              </ul>
            </div>
            <div className={styles.containerUl}>
              <ul>
                <li><a className={styles.footerTitle} href="">Comunidade</a></li>
                <li><a className={styles.footerA} href="">Código de Conduta</a></li>
                <li><a className={styles.footerA} href="">Colaboradores do Documentos</a></li>
                <li><a className={styles.footerA} href="">Conheça o time</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerCopy}>
        <div className={styles.copyWrapper}>
          <ul className={styles.ulCopyRede}>
            <li>
              <a href="">
                <img src={instaIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={faceIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitterIcon} alt="" />
              </a>
            </li>
          </ul>
          <div>
            <p>© 2024 META. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
