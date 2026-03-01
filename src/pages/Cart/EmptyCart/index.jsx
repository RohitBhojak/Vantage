import emptyCartImg from "../../../assets/empty-cart.png";
import styles from "./EmptyCart.module.css";

export default function EmptyCart() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={emptyCartImg} alt="Empty Cart" />
      </div>
      <h1>Oops! Looks like your cart is empty</h1>
      <button className={styles.btn}>Shop Now</button>
    </main>
  );
}
