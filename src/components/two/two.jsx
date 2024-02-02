import styles from "./two.module.css";
import img from "../../assets/img/suporte.svg";
import img2 from "../../assets/img/desempenho.svg";
import img3 from "../../assets/img/onbording.svg";
import img4 from "../../assets/img/product.svg";
import img5 from "../../assets/img/quality.svg";
import img6 from "../../assets/img/resulty.svg";

const Two = () => {
  return (
    <section className={styles.two_section}>
      <div className={styles.two}>
        <div className={styles.twoWrapper}>
          <div className={styles.twoContent}>
            <h2>Benefícios de usar React</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
          </div>
          <div className={styles.twoContainer}>
            <div className={styles.twoTxt}>
              <a href="#">
                <img src={img} alt="Suporte" />
              </a>
              <h2>Suporte</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className={styles.twoTxt}>
              <a className={styles.img2} href="#">
                <img src={img2} alt="Desempenho" />
              </a>
              <h2>Alto desempenho</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className={styles.twoTxt}>
              <a className={styles.img3} href="#">
                <img src={img3} alt="Board" />
              </a>
              <h2>Onboarding</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
          <div className={styles.twoContainer}>
            <div className={styles.twoTxt}>
              <a href="#">
                <img src={img4} alt="Produto" />
              </a>
              <h2>Produto</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className={styles.twoTxt}>
              <a className={styles.img2} href="#">
                <img src={img5} alt="Qualidade" />
              </a>
              <h2>Qualidade</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className={styles.twoTxt}>
              <a className={styles.img3} href="#">
                <img src={img6} alt="Resultado" />
              </a>
              <h2>Resultado</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Two;
