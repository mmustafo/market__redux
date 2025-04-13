import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function ProductList() {
     const {data: {products}} = useLoaderData()
  return <div>
     {products && products.map((producttt) => {
          return <Product producttt={producttt} key={producttt.id}/>
     })}
  </div>;
}

export default ProductList;
