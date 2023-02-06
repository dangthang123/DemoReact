import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import data from '../../Data/DataFooterSlider';

import PostAPI from '../../Data/PostAPI';
import { listpost } from '../../Redux/Api/FecthData';
import PostSkeleton from '../Loading/PostSkeleton';

function BlogPageItem(props) {
    // console.log(props);
    const { slug } = useParams();

    const dispatchPost = useDispatch();
    const post = props.items.post;
    // console.log(post);
    const postList = useSelector((state) => state.cartlist);
    // console.log(productList);
    const { loadingPost } = postList;
    useEffect(() => {
        dispatchPost(listpost());
    }, [dispatchPost])
    const thisTitle = post.find((item) => String(item.slug) === slug) || {};
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
            <div className="blog-column" key={blogpage.id}
                onClick={() => window.scrollTo(0, 0)}>
                <div className="blog-card">
                    <div className="containers">
                        <h3 className="blog-title"
                            onClick={() => window.scrollTo(0, 0)}>{blogpage.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: blogpage.content }}
                            onClick={() => window.scrollTo(0, 0)}
                        />

                    </div>
                    <Link to={`/posts/${blogpage.title}`} ><p className='onClick'><i className="fa-solid fa-arrow-right-long" style={{ marginRight: '3px' }}></i>Xem chi tiết !</p></Link>

                </div>
            </div>
        ))
    return (
        loadingPost === undefined ? (<PostSkeleton />) : (
            <div className="blog-row">
                {displayUsers}
                {
                    jsonTitle.length > usersperPage ? (
                        <ReactPaginate
                            previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                            nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                            pageCount={pageCount}
                            onPageChange={onPageChange}
                            containerClassName={'paginationBttns'}
                            previousLinkClassName={'previousBttn'}
                            nextLinkClassName={'nextBttn'}
                            disabledClassName={'paginationDisabled'}
                            activeClassName={'paginationActive'}
                        />
                    ) : (
                        null
                    )
                }

            </div>
        )

    );


}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}
export default connect(mapStateToProps)(BlogPageItem);