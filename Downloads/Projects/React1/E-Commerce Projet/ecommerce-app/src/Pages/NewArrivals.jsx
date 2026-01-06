import React, { useState } from 'react'
import NewArrivalsProductsDisplay from "../Components/NewArrivalsProductsDisplay/NewArrivalsProductsDisplay";
import Pagination from '../Components/Pagination/Pagination';
import AllProducts from '../assets/AllProducts';

function NewArrivals() {
  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = AllProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NewArrivalsProductsDisplay currentPosts={currentPosts}/>
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={AllProducts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default NewArrivals
