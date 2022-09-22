import { createContext, ReactNode, SetStateAction, useState } from "react";
import { IProductData } from "../types/product";

interface ICartData {
  products: IProductData[];
  addProductToCart: (data: IProductData, quantity: number) => void;
  removeProductFromCart: (product: IProductData) => void;
  getQuantity: () => number;
  getTotalPrice: () => number;
  isActive: boolean;
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
}

interface ICartProviderProps {
  children: ReactNode;
}

const cartContext = createContext({} as ICartData);

const CartProvider = ({ children }: ICartProviderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [products, setProducts] = useState<IProductData[]>([]);

  const addProductToCart = (data: IProductData, quantity: number) => {
    const productExist = products.find((product) => product.name === data.name);
    const previousProducts = products.filter(
      (product) => product.name !== data.name
    );

    if (productExist) {
      productExist.quantity += quantity;
      setProducts([productExist, ...previousProducts]);
    } else {
      const newProduct = Object.assign(data, { quantity });

      setProducts((prevProducts) => [newProduct, ...prevProducts]);
    }
  };

  const removeProductFromCart = (product: IProductData) => {
    let productsCopy = [...products];
    const productExist = productsCopy.find((prod) => prod === product);

    if (productExist) {
      if (productExist.quantity > 1) {
        productsCopy[productsCopy.indexOf(productExist)].quantity -= 1;
        setProducts(productsCopy);
      } else {
        const updatedProducts = productsCopy.filter(
          (productData) => productData !== productExist
        );
        setProducts(updatedProducts);
      }
    }
  };

  const getQuantity = () => {
    return products.reduce(
      (prevProduct, product) => prevProduct + product.quantity,
      0
    );
  };

  const getTotalPrice = () => {
    return parseFloat(
      products
        .reduce(
          (prevProduct, product) =>
            prevProduct + product.quantity * product.price,
          0
        )
        .toFixed(2)
    );
  };

  return (
    <cartContext.Provider
      value={{
        products,
        addProductToCart,
        removeProductFromCart,
        getQuantity,
        getTotalPrice,
        isActive,
        setIsActive
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { cartContext, CartProvider };
