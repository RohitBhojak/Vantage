import { NavLink } from "react-router";
import emptyCartImg from "../../../assets/empty-cart.png";
import styles from "./EmptyCart.module.css";

export default function EmptyCart() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={emptyCartImg} alt="Empty Cart" />
      </div>
      <span>Oops! Looks like your cart is empty</span>
      <NavLink to="/products" className={styles.btn} viewTransition>
        Shop Now
      </NavLink>
    </main>
  );
}
