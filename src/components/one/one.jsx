import styles from "./one.module.css";
import img from "../../assets/img/react-img.png";

const One = () => {
  return (
    <section>
      <div className={styles.one}>
        <div className={styles.Wrapper}>
          <div className={styles.one_img}>
            <img className={styles.imgone} src={img} alt="" />
          </div>
          <div className={styles.one_txt}>
            <h2>
              Crie diversas interfaces{" "}
              <span>rápidas e incríveis usando componentes</span>
            </h2>
            <p>
              O React permite construir interfaces de usuário a partir de peças
              individuais chamadas componentes.
            </p>
          </div>
          <div className={styles.button}>
            <div className={styles.one_btn}>
              <a href="#">Aprenda</a>
            </div>
            <div className={styles.one_btn2}>
              <a href="#">Documentação</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default One;
