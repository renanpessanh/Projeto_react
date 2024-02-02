import styles from "./four.module.css";
import logo3 from "../../assets/img/react-img.png";

function Four () {
  return (
    <section>
      <div className={styles.four}>
        <div className={styles.fourWrapper}>
          <div className={styles.logo3}>
            <img src={logo3} alt="Logo3" />
          </div>
          <div className={styles.text}>
            <p>
            Bem-vindo à comunidade 
            </p>
            <p>
            React
            </p>
          </div>
          <div className={styles.button}>
              <a href="#">Aprenda</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Four;
