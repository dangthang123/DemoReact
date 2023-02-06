import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Banner from '../Banner';
import Footer from '../Footer';
import Product from '../Product';
import Title from '../Title';
// import '../../css/Banner.css';


function HomePage(props) {
    const dataSale = props.product.products.filter(ite => ite.onSale === true)
    const dataProducts = props.product.productcategory.filter(ite => ite.name.includes('Thit - Hải sản tươi sống'))
    const dataProductDouong = props.product.productcategory.filter(ite => ite.name.includes('Đồ uống -Giải khát'))
    let dataProduct = []
    if (dataProducts !== undefined && dataProducts[0] !== undefined) {
        dataProduct = (dataProducts[0].products.nodes)
    }
    // console.log(dataProduct);
    let dataProductDU = []
    if (dataProductDouong !== undefined && dataProductDouong[0] !== undefined) {
        dataProductDU = (dataProductDouong[0].products.nodes)
    }
    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        )
    }, [])
    return (
        <div>
            <section className="section-main container">
                <Banner />
                <div className='cate-page'>
                    <Title title={'Sản Phẩm Khuyến Mãi'} des={'Đừng bỏ lỡ cơ hội này với mức giảm giá đặc biệt chỉ trong tuần này'} />
                    <Product data={dataSale} />
                </div>
                <div className='cate-page' >
                    <Title title={'Thịt - Hải Sản Tươi'} des={''} />
                    <Product data={dataProduct} />
                </div>
                <div className='cate-page' >
                    <Title title={'Đồ uống -Giải khát'} des={''} />
                    <Product data={dataProductDU} />
                </div>

            </section>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        product: state.cartlist
    }
}
export default connect(mapStateToProps)(HomePage)