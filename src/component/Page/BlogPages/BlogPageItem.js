import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom';
// import data from '../../Data/DataFooterSlider';

import PostAPI from '../../Data/PostAPI';

function BlogPageItem() {
    const { slug } = useParams();
    const useF = PostAPI();
    let title = useF;
    const thisTitle = title.find((item) => String(item.slug) === slug) || {};
    // console.log(thisTitle);
    let jsonTitle = [];

    if (thisTitle !== null && thisTitle.posts !== undefined) {
        // jsonProduct = JSON.stringify(thisProduct.products.nodes);
        jsonTitle = thisTitle.posts.nodes;
    }
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 5;
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(jsonTitle.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    const displayUsers = jsonTitle.slice(pagesVisited, pagesVisited + usersperPage)
        .map((blogpage) => (
            <div className="blog-column" key={blogpage.id}>
                <div className="blog-card">
                    <div className="containers">
                        <h3 className="blog-title">{blogpage.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: blogpage.content }} />

                    </div>
                    <Link to={`/posts/${blogpage.title}`} ><p className='onClick'><i className="fa-solid fa-arrow-right-long" style={{ marginRight: '3px' }}></i>Click to see details</p></Link>

                </div>
            </div>
        ))
    return (
        <div className="blog-row">
            {displayUsers}
            <ReactPaginate
                previousLabel={'< Prev'}
                nextLabel={'Next >'}
                pageCount={pageCount}
                onPageChange={onPageChange}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>
    );


}

export default BlogPageItem;