import React from "react";
import ProductCard from "../components/ProductCard";
import { UseUsers } from "../contex/UserProvider";

const TopRated = () => {
 
  const {state : {users, loading, error} } = UseUsers();

  let content;
 
  if(loading) {
   content = <p>loading</p>;
  }
 
  if(error){
   content = <p>error</p>;
  }
 
  if(!loading && !error && users.length === 0){
   content =  <p>Nothing to show</p>;
  }
 
  if(!loading && !error && users.length){
   content =  users 
   .filter(user => user.completed === true)
   .map(user => <ProductCard key={user.id} user={user} /> );
  }
 
 
   return (
    <>
    <div className="text-center">
      <p className="text-4xl font-bold">Top Rated = {content.length}</p>
    </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
    {content}
     </div>
    </>
   );
};

export default TopRated;
