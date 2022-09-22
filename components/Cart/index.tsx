import Image from "next/image";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { cartContext } from "../../contexts/CartContext";
import { createCheckoutSession } from "../../lib/getStripe";
import { urlFor } from "../../lib/sanityClient";
import { BiArrowBack } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

import styles from "./index.module.css";

const Cart = () => {
  const {
    products,
    removeProductFromCart,
    getQuantity,
    getTotalPrice,
    isActive,
    setIsActive
  } = useContext(cartContext);

  return (
    <div
      className={styles.container}
      style={!isActive ? { display: "none" } : {}}
    >
      <div>
        <main>
          <section className={styles.titleContainer}>
            <h2>Your cart. ({getQuantity()} items)</h2>
            <BiArrowBack onClick={() => setIsActive(false)} cursor="pointer" />
          </section>

          {!products.length ? (
            <div>Shopping Cart Empty</div>
          ) : (
            <>
              <section className={styles.itemsContainer}>
                <ul>
                  {products.map((product) => (
                    <li key={uuidv4()}>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemImageContainer}>
                          <Image
                            src={
                              product.images
                                ? urlFor(product.images[0]).url()
                                : ""
                            }
                            alt={`Product: ${product.name}`}
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className={styles.itemDetailsContainer}>
                          <p>{product.name}</p>
                          <p>
                            ${product.price}{" "}
                            <span className={styles.quantity}>
                              x {product.quantity}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <FaTrashAlt
                          color="#9c0207"
                          cursor="pointer"
                          onClick={() => removeProductFromCart(product)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles.totalContainer}>
                <div>
                  <span className={styles.total}>Total: </span>
                  <span className={styles.price}>${getTotalPrice()}</span>
                </div>
                <button onClick={() => createCheckoutSession(products)}>
                  Pay With Stripe
                </button>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Cart;
