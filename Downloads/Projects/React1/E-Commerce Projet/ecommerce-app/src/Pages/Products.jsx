import React, { useState } from "react";
import PostsDisplay from "../Components/PostsDisplay/PostsDisplay";
import AllProducts from "../assets/AllProducts";
import Pagination from "../Components/Pagination/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = AllProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <PostsDisplay currentPosts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={AllProducts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;
