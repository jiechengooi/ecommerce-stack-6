export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "productImage",
      title: "ProductImage",
      type: "image",
      description: "Product image without background",
      options: {
        hotspot: true
      }
    },
    {
      name: "buttonText",
      title: "ButtonText",
      description: "Button label text",
      initialValue: "Shop Now",
      type: "string"
    },
    {
      name: "product",
      title: "Product",
      type: "string"
    },
    {
      name: "productSlug",
      title: "ProductSlug",
      type: "slug",
      options: {
        source: "product"
      }
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string"
    },
    {
      name: "midText",
      title: "MidText",
      type: "string"
    },
    {
      name: "largeText",
      title: "LargeText",
      type: "string"
    },
    {
      name: "discount",
      title: "Discount",
      description: "Discount text. Ex: 30% OFF",
      type: "string"
    },
    {
      name: "discountTime",
      title: "DiscountTime",
      description: "Start and end date of discount",
      type: "string"
    }
  ]
};
