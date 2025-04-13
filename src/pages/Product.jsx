import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};

function ProductPage() {
  const data = useLoaderData();

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <strong>{data.price}$</strong>
    </div>
  );
}

export default ProductPage;
