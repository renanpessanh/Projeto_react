import styles from "./three.module.css";
import img1 from "../../assets/img/image1.png";
import img2 from "../../assets/img/image2.png";
import img3 from "../../assets/img/image3.png";
import img4 from "../../assets/img/image4.png";

const Three = () => {
  return (
    <section className={styles.three}>
      <div className={styles.three_wrapper}>
        <div className={styles.part1}>
          <div className={styles.img1}>
            <img src={img1} alt="Imagem-1" />
          </div>
          <div className={styles.text1}>
            <h2 className={styles.title_h2}>Uma comunidade de milhões</h2>
            <p className={styles.p}>
              Você não está sozinho. Dois milhões de desenvolvedores de todo o
              mundo visitam a documentação do React todos os meses. React é algo
              com o qual as pessoas e as equipes podem concordar, venham fazer
              parte da nossa comunidade.
            </p>
            <a className={styles.button_three} href="#">
              Comunidade
            </a>
          </div>
        </div>
        <div className={styles.part2_wrapper}>
          <img src={img2} alt="Imagem-2" />
          <img src={img3} alt="Imagem-3" />
          <img src={img4} alt="Imagem-4" />
        </div>
        <div className={styles.last_text}>
          <p>
            É por isso que o React é mais do que uma biblioteca, uma arquitetura
            ou mesmo um ecossistema. React é uma comunidade. É um lugar onde
            você pode pedir ajuda, encontrar oportunidades e fazer novos amigos.
            Você conhecerá desenvolvedores e designers, iniciantes e
            especialistas, pesquisadores e artistas, professores e estudantes.
            Nossas experiências podem ser muito diferentes, mas o React nos
            permite criar interfaces de usuário juntos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Three;
