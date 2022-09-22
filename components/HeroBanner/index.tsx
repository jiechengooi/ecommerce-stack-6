import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import { urlFor } from "../../lib/sanityClient";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import BannerBg from "/public/assets/banner-bg.jpg";

import styles from "./index.module.css";

import { IBannerData } from "../../types/banner";

interface IHeroBannerProps {
  data: IBannerData[];
}

let intervalId: NodeJS.Timeout;

const HeroBanner = ({ data }: IHeroBannerProps) => {
  const [position, setPosition] = useState(0);

  const transRef = useSpringRef();
  const transitions = useTransition(position, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  useEffect(() => {
    transRef.start();
  }, [position, transRef]);

  useEffect(() => {
    intervalId = setInterval(() => {
      setPosition((previous) => {
        if (previous === data.length - 1) {
          return 0;
        } else {
          return previous + 1;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [position, setPosition, data]);

  return (
    <div className={styles.container}>
      <div className={styles.bannerNavigation}>
        {position > 0 && data.length > 0 && (
          <BsArrowLeftCircle
            className={styles.leftArrow}
            onClick={() => setPosition(position - 1)}
          />
        )}
        {position < data.length - 1 && (
          <BsArrowRightCircle
            className={styles.rightArrow}
            onClick={() => setPosition(position + 1)}
          />
        )}
      </div>
      <Image
        src={BannerBg}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        placeholder={"blur"}
      />
      <main>
        {!data.length ? (
          <div className={styles.placeholderBanner}>
            <h2>Buy the best coffee in the world</h2>
            <Link href="/#products">SHOP NOW</Link>
          </div>
        ) : (
          transitions((style, i) => (
            <animated.div style={style} className={styles.bannerContent}>
              <section className={styles.bannerInfoContainer}>
                <p>{data[i].smallText}</p>
                <h2>{data[i].midText}</h2>
                <h1>{data[i].largeText}</h1>
                <div>
                  <h2>{data[i].discount}</h2>
                  <span>{data[i].discountTime}</span>
                </div>
                <Link
                  href={
                    data[i]?.productSlug
                      ? `/product/${data[i].productSlug.current}`
                      : "/#products"
                  }
                >
                  {data[i].buttonText}
                </Link>
              </section>
              <section className={styles.productImageContainer}>
                {data[i].productImage !== undefined && (
                  <Image
                    src={urlFor(data[i].productImage).url()}
                    alt={data[i].product}
                    width={180}
                    height={180}
                    layout="responsive"
                  />
                )}
              </section>
            </animated.div>
          ))
        )}
      </main>
    </div>
  );
};

export default HeroBanner;
