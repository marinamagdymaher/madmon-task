import { createContext, useContext, useEffect, useState } from "react";

export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const transformedProducts = data.products.map((prod) => ({
          id: prod.id,
          title: prod.title,
          image: prod.images[0],
          price: prod.price,
          category: prod.category,
          rating: prod.rating,
        }));
        const updatedProducts = transformedProducts.map((item) => {
          // Add salePercent only if rating is below 3
          return {
            ...item,
            salePercent: item.rating < 3 && 25,
          };
        });
        setProducts(updatedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <UnitsContext.Provider value={{ products, loading, error }}>
      {children}
    </UnitsContext.Provider>
  );
};

export const useUnits = () => useContext(UnitsContext);
