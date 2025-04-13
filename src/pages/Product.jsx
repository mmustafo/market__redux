import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";

export const loader = async ({ params }) => {
  try {
    const response = await axiosInstance(`/product/${params.id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

function Product() {
  const params = useLoaderData();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-amber-300 rounded-2xl shadow-2xl shadow-amber-200 border-none mb-10">
      <img
        src={params.thumbnail}
        alt={params.title}
        className="w-full rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold text-amber-600 mb-2">{params.title}</h2>
      <p className="text-amber-600 mb-2">{params.description}</p>
      <p className="text-lg font-semibold text-green-600">
        Price: ${params.price}
      </p>
      <p className="text-sm text-amber-600 mt-1">Brand: {params.brand}</p>{" "}
      <p className="text-sm text-amber-600 mt-1">stock: {params.stock}</p>
    </div>
  );
}

export default Product;
