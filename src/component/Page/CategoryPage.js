import React from 'react';
import { useParams } from 'react-router';
import CategoryPageAPI from '../Data/CategoryAPI';
import Footer from '../Footer';
import CategoryPageItem from './CategoryPages/CategoryPageItem';

// import '../../css/Product.css';
export default function Categorypage({ handleAddtoCart }) {
    const { slug } = useParams();

    const data = CategoryPageAPI();
    let catgorypagelist = data;

    const thisTitle = catgorypagelist.find((product) => String(product.slug) === slug) || {};
    // console.log(thisProduct);
    return (
        <div className="container-all">
            <section>
                <div className="section-main container">
                    <div className="tille-container">
                        <div className="tille-item">
                            <h4 className="tille-item-1">FRANCO</h4>
                            <h3 className="tille-item-2">LIST {thisTitle.name} ITEMS</h3>
                            <hr className="tille-hr" />
                        </div>
                    </div>
                    <CategoryPageItem handleAddtoCart={handleAddtoCart} />
                </div>
            </section>
            <Footer />
        </div>
    )
}