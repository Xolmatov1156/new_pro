import React, { useEffect } from "react";
import ProductCard from "../components/ProductsCard";
import { useAxios } from "../hook/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_PRODUCTS } from "../redux/types";
import Header from "../components/Header";

function Home() {
  const getProducts = useSelector((state) => state.getProducts.getAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await useAxios().get("/products");
        dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="bg-violet-600">
        <ul className="w-[1500px] mx-auto flex flex-wrap gap-[15px] pt-[10px] pb-[20px]">
          {getProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
