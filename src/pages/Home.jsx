import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";
import ProductList from "../components/ProductList";

export const loader = async () => {
  const res = await axiosInstance("/product");
  return res;
};

function Home() {
  const {
    data: { products },
  } = useLoaderData();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
