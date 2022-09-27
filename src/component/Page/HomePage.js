import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import Product from '../Product';
import Title from '../Title';
// import '../../css/Banner.css';


export default function HomePage() {
    return (
        <div>
            <section className="section-main container">
                <Banner />
                <Title />
                <Product />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}