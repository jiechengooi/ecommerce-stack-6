import type { GetServerSideProps, NextPage } from "next";

import { client } from "../lib/sanityClient";

import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Products from "../components/Products";

import { IBannerData } from "../types/banner";
import { IProductData } from "../types/product";

interface IHomeProps {
  bannerData: IBannerData[];
  productData: IProductData[];
}

const Home: NextPage<IHomeProps> = ({ bannerData, productData }) => {
  return (
    <div>
      <section>
        <Header />
        <HeroBanner data={bannerData} />
      </section>
      <section id="products">
        <Products data={productData} />
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  return {
    props: { bannerData, productData }
  };
};

export default Home;
