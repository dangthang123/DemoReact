import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { listcategoryproduct, listmenu, listpost, listproduct } from '../Redux/Api/FecthData';
import MenuAPI from '../Data/MenuAPI';
import dataProduct from '../Data/ProductNewAPI';
import AboutPage from '../Page/AboutPage';
import BlogPage from '../Page/BlogPage';
import BlogPageDetail from '../Page/BlogPages/BlogPageDetail';
import CartPageDetali from '../Page/Cart/CartPageDetali';
import CategoryPage from '../Page/CategoryPage';
import CollectionPage from '../Page/CategoryPages/CollectionPage';
import ContactPage from '../Page/ContactPage';
import HomePage from '../Page/HomePage';
import NotFound from '../Page/NotFound';
import Productdetail from '../Product/ProductItem/ProductDetalis';
import WishPageDetali from '../Wish/WishPageDetali';
import Checkout from '../Page/Checkout/Checkout';


function HeaderBottom(props) {
    // console.log(props.items.carts.length);
    // ++++ MOBI+++
    const [showMenuMobi, setShowMenuMobi] = useState(true);

    // +++Search+++

    const dispatchProduct = useDispatch();
    const productList = useSelector((state) => state.cartlist);
    // console.log(productList);
    const { loadingProduct, errorProduct, products } = productList;
    //  
    useEffect(() => {
        dispatchProduct(listproduct());
    }, [dispatchProduct])
    // ++++Show+++
    const [showSearch, setshowSearch] = useState(false);
    // +++Filter+++
    const [searchItem, setsearchItem] = useState("");
    const onChange = (event) => {
        setsearchItem(event.target.value);
    }
    const onSearch = (searchTerm) => {
        setsearchItem(searchTerm);
        // console.log(searchTerm);
    }
    // ++++Product Category++++

    const dispatch = useDispatch();
    const productcategory = props.items.productcategory;
    // console.log(productcategory);
    // const productCategory = useSelector((state) => state.cartlist);
    // const { loading, error, productcategory } = productCategory;
    useEffect(() => {
        dispatch(listcategoryproduct());
    }, [dispatch])

    // ++++ POST (BLOG)+++
    const dispatchPost = useDispatch();
    const post = props.items.post;
    // console.log(post);
    // const postList = useSelector((state) => state.cartlist);
    // const { loadingPost, errorPost, post } = postList;
    // console.log(productcategory);
    useEffect(() => {
        dispatchPost(listpost());
    }, [dispatchPost])

    // +++ MENU +++
    const dispatchMenu = useDispatch();
    const dataMenu = props.items.menus;
    useEffect(() => {
        dispatchMenu(listmenu());
    }, [dispatchMenu])

    return (
        <div className="header-bottom">
            <div className="header-bottom-container">
                <div className="header-logo">
                    <Link to=""><li>FRANCO</li></Link>
                </div>

                <div className="header-menu">
                    <div id="toggle-header-menu">
                        <i className="fa-solid fa-bars" onClick={() => setShowMenuMobi(!showMenuMobi)}></i>
                    </div>
                    {showMenuMobi ?
                        <ul>
                            <li><Link to="">HOME</Link></li>

                            {productcategory.sort((a, b) => a.id > b.id ? 1 : -1).map((item) => (
                                <li key={item.id}><Link to={`/${item.slug}`}>{item.name}</Link></li>
                            )).slice(0, 2)}

                            <li><Link to="/about-us">ABOUT US</Link></li>

                            {post.sort((a, b) => a.id > b.id ? 1 : -1).map((item) => (
                                <li key={item.id}> <Link to={`/post/${item.slug}`}>{item.name}</Link></li>
                            )).slice(0, 1)}
                            {/* {dataMenu.sort((a, b) => a.id < b.id ? 1 : -1).map((item) => (
                                <li key={item.id}><Link to={`${item.uri}`}>{item.label}</Link></li>
                            ))} */}
                            <li><Link to="/collection">COLLECTION</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>

                            <li>
                                <div id="search-box">
                                    <OutsideClickHandler onOutsideClick={() => setshowSearch(false)} >
                                        {showSearch && (
                                            <input type="text" id="search-text" placeholder="Search"
                                                value={searchItem} onChange={onChange} autoComplete="off" />

                                        )}
                                    </OutsideClickHandler>
                                    <button id="search-btn" onClick={() => onSearch(searchItem)}>
                                        <a href="#"><i className="fa-solid fa-magnifying-glass" onClick={() => setshowSearch(true)}></i></a>
                                    </button>

                                </div>
                                <div className="show-item-search">
                                    {products
                                        .filter((item) => {
                                            const searchTerm = searchItem.toLowerCase();

                                            const productname = item.name.toLowerCase();

                                            return (
                                                searchTerm && productname.startsWith(searchTerm) && productname !== searchTerm
                                            );
                                        }).slice(0, 6)
                                        .map((item) => (

                                            <div className='item-show' key={item.id}>
                                                <Link to={`/${item.name}/${item.id}`}><img src={item.image.sourceUrl} alt="" className='show-img' onClick={() => onSearch(item.image.sourceUrl)}></img></Link>
                                                <Link to={`/${item.name}/${item.id}`} className='link-img-show'><h4 className='show-name' onClick={() => onSearch(item.name)} >{item.name}</h4></Link>
                                                <span className='show-price' onClick={() => onSearch(item.salePrice)}>${item.salePrice}.00</span>
                                            </div>

                                        ))}


                                </div>
                            </li>
                        </ul>
                        : null}
                </div>

                <div className="header-Cart-wish">
                    <li className='btn-wish'>
                        <Link to="/Wish"><i className="pe-7s-like" id="Wish"></i>
                            {/* <span className='wish-number'>{wishItem.length === 0 ? "" : wishItem.length}</span> */}
                            {/* <span className='wish-number'>{props.numberWish === 0 ? "" : props.numberWish}</span> */}
                            <span className='wish-number'>{props.items.wishs.length === 0 ? "" : props.items.wishs.length}</span>

                        </Link>
                    </li>

                    <li className='btn-cart'>
                        <Link to="/Cart"><i className="pe-7s-cart" id="Cart"></i>
                            {/* <span className='cart-number'>{cartItem.length === 0 ? "" : cartItem.length}</span> */}
                            {/* <span className='wish-number'>{props.numberWish === 0 ? "" : props.numberWish}</span> */}
                            <span className='cart-number'>{props.items.carts.length === 0 ? "" : props.items.carts.length}</span>
                        </Link>
                    </li>

                </div>
            </div>
            <Routes>
                <Route path="" element={<HomePage
                />}></Route>

                <Route path="*" element={<NotFound to="notfound" />} />
                {/* <Route path="/*" element={<Navigate to="not-found" />} /> */}

                <Route path="/:slug" element={<CategoryPage />}></Route>

                <Route path="/about-us" element={<AboutPage />}></Route>
                <Route path="/post/:slug" element={<BlogPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                {/* <Route path="/Search" element={<SearchBox />}></Route> */}

                <Route path="/collection" element={<CollectionPage />}></Route>

                <Route path="/:name/:id" element={<Productdetail />}></Route>

                <Route path="/posts/:title" element={<BlogPageDetail />}></Route>

                {/* <Route path="/Blogs/:name/:id" element={<FooterSliderDetail />}></Route> */}

                <Route path="/Cart" element={<CartPageDetali />}></Route>

                <Route path="/Wish" element={<WishPageDetali />}></Route>

                {/* <Route path="/checkout" element={<Checkout />}></Route> */}

            </Routes>
        </div>

    )
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
        numberCart: state.cartlist.numberCart,
        numberWish: state.cartlist.numberWish
    }
}
export default connect(mapStateToProps)(HeaderBottom);