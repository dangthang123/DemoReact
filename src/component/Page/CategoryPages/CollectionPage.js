import { Box, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import CategoryPageAPI from '../../Data/CategoryAPI';
import Footer from '../../Footer';
import { listcategoryproduct } from '../../Redux/Api/FecthData';
import ProductSkeleton from '../Loading/ProductSkeleton';


function CollectionPage(props) {

    const dispatch = useDispatch();
    const productCategory = useSelector((state) => state.cartlist);
    const productcategory = props.items.productcategory;
    const { loading } = productCategory;
    // console.log(productcategory);
    useEffect(() => {
        dispatch(listcategoryproduct());
    }, [dispatch])
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 8;         //number of items in a page
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(productcategory.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayUsers = productcategory.slice(pagesVisited, pagesVisited + usersperPage)
        .map((pro) => (
            <div className="product-item" key={pro.id}>
                <div className="product-item-img">
                    <img src={pro.image.sourceUrl} alt=''></img>
                </div>
                <div className="product-item-content">
                    <div className="product-item-content-tille">
                        <p>{pro.name} LIST</p>
                    </div>
                    <Link to={`/${pro.slug}`}><p className='onClick'><i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '0px', marginTop: '10px' }}></i>Click to see details</p></Link>
                </div>
            </div>
        ))
    return (
        <div className="container-all">

            <section>
                <div className="section-main container">
                    <div className="tille-container">
                        {loading === undefined ? (
                            <div className="tille-item">
                                <Box sx={{ width: 300 }}>
                                    <Skeleton animation="wave" width="50%" />
                                    <Skeleton animation="wave" width="60%" />
                                </Box>
                            </div>
                        ) : (
                            <div className="tille-item">
                                <h4 className="tille-item-1">FRANCO</h4>
                                <h3 className="tille-item-2">LIST COLLECTION</h3>
                                <hr className="tille-hr" />
                            </div>
                        )}

                    </div>
                    {loading === undefined ? (
                        <ProductSkeleton />
                    ) : (
                        <div className="product-list container">
                            {displayUsers}
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
                        </div>
                    )}

                </div>
            </section>
            <Footer />
        </div>


    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}

export default connect(mapStateToProps)(CollectionPage);