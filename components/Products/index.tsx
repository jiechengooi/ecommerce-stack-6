import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartContext";
import { urlFor } from "../../lib/sanityClient";

import styles from "./index.module.css";

import { IProductData } from "../../types/product";

interface IProductsProps {
  data: IProductData[];
}

const Products = ({ data }: IProductsProps) => {
  const { addProductToCart } = useContext(cartContext);

  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((product) => (
          <div key={product._id}>
            <section className={styles.imageContainer}>
              {product.images && (
                <Image
                  src={urlFor(product.images[0]).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              )}
            </section>
            <section className={styles.infoContainer}>
              <p>{product.name}</p>
              <p>${product.price}</p>
            </section>
            <section className={styles.actionsContainer}>
              <Link href={`/product/${product.slug?.current}`}>More</Link>
              <button onClick={() => addProductToCart(product, 1)}>
                Add To Cart
              </button>
            </section>
          </div>
        ))}
    </div>
  );
};

export default Products;
