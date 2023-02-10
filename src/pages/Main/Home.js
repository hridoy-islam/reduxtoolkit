import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock } from "../../features/filter/filterSlice";
import { useGetProductsQuery } from '../../features/api/apiSlice'


const Home = () => {
  const dispatch = useDispatch();

  const { brands, stock } = useSelector(state => state.filter);

  const { data, isLoading, isError } = useGetProductsQuery();
  const products = data?.data;
  
  let content;

  if (isError) {
    content = <p>Something Went Wrong</p>
  }
  
  if (isLoading) {
    content = <h1>Loading .....</h1>
  }
  if (products) {
    content = products.length && products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }

  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : ''} `}
          onClick={() => dispatch(toggleStock())}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : ''}`}
          onClick={() => dispatch(toggleBrand('amd'))}
        >
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : ''}`}
          onClick={() => dispatch(toggleBrand('intel'))}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
