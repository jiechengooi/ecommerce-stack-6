import Link from "next/link";

import { useContext } from "react";
import { cartContext } from "../../contexts/CartContext";
import Cart from "../Cart";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./index.module.css";

const Header = () => {
  const { getQuantity, setIsActive } = useContext(cartContext);

  return (
    <>
      <header className={styles.container}>
        <section className={styles.logoContainer}>
          <Link href="/">
            <a>
              <h1>
                Coffee{" "}
                <span style={{ color: "var(--color-light-brown" }}>Store</span>
              </h1>
            </a>
          </Link>
        </section>
        <section className={styles.shoppingCartContainer}>
          <FaShoppingCart
            size={35}
            onClick={() => setIsActive(true)}
            cursor="pointer"
          />
          <div>
            <span>Shopping cart</span>
            <br />
            <span>{getQuantity()} items</span>
          </div>
        </section>
      </header>
      <Cart />
    </>
  );
};

export default Header;
