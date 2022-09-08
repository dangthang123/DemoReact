import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import CategoryPageAPI from '../../Data/CategoryAPI';
import Footer from '../../Footer';


function CollectionPage() {
    const dt = CategoryPageAPI();
    const dataC = dt;
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 8;         //number of items in a page
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(dataC.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayUsers = dataC.slice(pagesVisited, pagesVisited + usersperPage)
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
                        <div className="tille-item">
                            <h4 className="tille-item-1">FRANCO</h4>
                            <h3 className="tille-item-2">LIST COLLECTION</h3>
                            <hr className="tille-hr" />
                        </div>
                    </div>
                    <div className="product-list container">
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
                </div>
            </section>
            <Footer />
        </div>


    );
}

export default CollectionPage;