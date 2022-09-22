import { useContext, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { cartContext } from "../../contexts/CartContext";
import { client, urlFor } from "../../lib/sanityClient";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Header from "../../components/Header";

import styles from "./index.module.css";

import { IProductData } from "../../types/product";

interface IProductProps {
  productDetails: IProductData;
}

const Product: NextPage<IProductProps> = ({ productDetails }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const { addProductToCart, setIsActive } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.imagesContainer}>
          <div className={styles.bigImage}>
            <div>
              <Image
                src={urlFor(productDetails.images[imageIndex]).url()}
                alt={`${productDetails.name} ${imageIndex + 1}`}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.smallImages}>
            {productDetails.images.map((image, index) => (
              <div
                key={index}
                style={
                  index === imageIndex
                    ? { backgroundColor: "var(--color-brown" }
                    : {}
                }
                onClick={() => setImageIndex(index)}
              >
                <Image
                  src={urlFor(image).url()}
                  alt={`${productDetails.name} ${index + 1}`}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.infoContainer}>
          <h2>{productDetails.name}</h2>
          <article>
            <h3>Details: </h3>
            <p>{productDetails.details}</p>
          </article>
          <p className={styles.price}>${productDetails.price}</p>
          <div className={styles.quantity}>
            <h3>Quantity:</h3>
            <p>
              <span>
                <AiOutlineMinus
                  onClick={() => {
                    setProductQuantity((previousQuantity) =>
                      previousQuantity > 1
                        ? previousQuantity - 1
                        : previousQuantity
                    );
                  }}
                  cursor="pointer"
                />
              </span>
              <span>{productQuantity}</span>
              <span>
                <AiOutlinePlus
                  onClick={() =>
                    setProductQuantity(
                      (previousQuantity) => previousQuantity + 1
                    )
                  }
                  cursor="pointer"
                />
              </span>
            </p>
          </div>
          <div className={styles.actionsContainer}>
            <button
              onClick={() => {
                addProductToCart(productDetails, productQuantity);

                setIsActive(true);
              }}
            >
              Buy Now
            </button>
            <button
              onClick={() => addProductToCart(productDetails, productQuantity)}
            >
              Add To Cart
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug }
}: any) => {
  const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productDetails = await client.fetch(productQuery);

  return { props: { productDetails } };
};

export default Product;
