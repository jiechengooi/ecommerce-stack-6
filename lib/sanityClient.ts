import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "60bswpa2",
  dataset: "ecommerce-stack-6",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source);

export { client, urlFor };
