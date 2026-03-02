import { useNavigate } from "react-router";
import hero from "../../assets/hero.png";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          ONLINE <span className={styles.highlight}>SHOPPING</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit minus, earum cumque
          veniam incidunt architecto. Veritatis earum laudantium blanditiis fuga at. Dolores libero
          aliquam necessitatibus, modi qui error quaerat.
        </p>
        <button
          className={styles.btn}
          onClick={() => navigate("/products", { viewTransition: true })}
        >
          Shop Now
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={hero} alt="Hero image" />
      </div>
    </main>
  );
}
