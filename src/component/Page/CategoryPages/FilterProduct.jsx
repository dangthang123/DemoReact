import React from 'react';
import '../css/filter-product.css';

function FilterProduct({ handClickShowGrid, handClickShowList, showGird, sortPlayers, lengthProduct }) {
    return (
        <div className='filter-product'>
            <div className='row flex-layout center-vertical'>
                <div className='col-xs-12 col-sm-4 col-md-6 total-products'>
                    <ul className="display">
                        <li id="grid" className={`show_grid ${showGird == 'grid' ? 'selected' : ''}`}
                            onClick={handClickShowGrid}
                        >
                            <i className="fa-solid fa-table-cells-large"></i></li>
                        <li id="list" className={`show_list ${showGird == 'list' ? 'selected' : ''}`}
                            onClick={handClickShowList}
                        >
                            <i className="fa-solid fa-list"></i></li>
                    </ul>
                    <p className="hidden-sm-down">There are {lengthProduct} products.</p>
                </div>
                <div className='col-xs-12 col-sm-8 col-md-6 sort-by-list'>
                    <div className='row sort-by-row'>
                        <span className='col-sm-3 col-md-3 hidden-sm-down sort-by'>Sort by:</span>
                        <div className='col-sm-12 col-xs-12 col-md-9 products-sort-order'>
                            {/* <button className='select-title'>
                                Price, low to high
                                <i className="fa-solid fa-sort-down"></i>
                            </button> */}
                            <div className='sorting-products '>
                                <form className="ordering" method="get">
                                    <select
                                        name="perpage"
                                        className="perpage orderby filterSelect select2-hidden-accessible select-title"
                                        onChange={sortPlayers}
                                        data-class="select-filter-perpage"
                                    >
                                        <option value='nameaz'>Name, A to Z</option>
                                        <option value="nameza">Name, Z to A</option>
                                        <option value="pricelowtohigh">Price, low to high</option>
                                        <option value="pricehightolow">Price, high to low</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterProduct;