export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true
      }
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "details",
      title: "Details",
      type: "text"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      }
    }
  ]
};
