import React from "react";
import { BiListPlus } from "react-icons/bi";
import { UseUsers } from "../contex/UserProvider";

const ProductCard = ({ user }) => {

  const { dispatch } = UseUsers();

  return (
    <div className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'>
      <h1 className='font-bold text-center'>{user.id}</h1>
      <h1 className='font-bold text-center'>{user.title}</h1>
      <div className='flex gap-2 mt-5'>
        <button onClick={() => dispatch({ type : "CART", payload : user })} className='rounded-full py-1 px-2 flex-1 text-white text-bold transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300'>
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
