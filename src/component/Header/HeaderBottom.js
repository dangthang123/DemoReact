import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, Route, Routes } from 'react-router-dom';
import CategoryPageAPI from '../Data/CategoryAPI';
import PostAPI from '../Data/PostAPI';
import dataProduct from '../Data/ProductNewAPI';
// import FooterSliderDetail from '../Footer/FooterSlider/FooterSliderDetail';
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


export default function HeaderBottom() {
    // ++++ MOBI+++
    const [showMenuMobi, setShowMenuMobi] = useState(true);

    // +++Search+++
    const dtP = dataProduct();
    const dataProductPage = dtP;


    // const dtW = dataWomen();
    // const datawomenpage = dtW;
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
    // ++++++ADD TO CART+++++
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItem') || '[]'); //save cart from local storage
    const [cartItem, setCartItem] = useState(cartFromLocalStorage);
    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [cartItem]); //save cart from local storage

    const handleAddtoCart = (product) => {
        alert('Add to cart');
        const ProductExist = cartItem.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItem(cartItem.map((item) => item.id === product.id ?
                { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));
        }
        else {
            setCartItem([...cartItem, { ...product, quantity: 1 }]);
        }

    }
    const handleRemovetoCart = (product) => {
        const ProductExist = cartItem.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id));
        } else {
            setCartItem(cartItem.map((item) =>
                item.id === product.id
                    ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
                    : item));
        }
    }
    const handleCleartoCart = () => {
        setCartItem([]);
    }
    const handleRemoveItem = (id) => {
        alert('Remove product item');
        const arr = cartItem.filter((item) => item.id !== id);
        setCartItem(arr);;
    };

    //  ++++++ADD TO WISH+++++
    const wishFromLocalStorage = JSON.parse(localStorage.getItem('wishItem') || '[]'); //save wish from local storage
    const [wishItem, setWishItem] = useState(wishFromLocalStorage);
    useEffect(() => {
        localStorage.setItem('wishItem', JSON.stringify(wishItem));
    }, [wishItem]);

    const handleAddtoWish = (wish) => {
        alert('Add to wish');
        const WishExist = wishItem.find((itemwish) => itemwish.id === wish.id);
        if (WishExist) {
            setWishItem(wishItem.map((itemwish) => itemwish.id === wish.id ?
                { ...WishExist, quantity: WishExist.quantity + 1 } : itemwish));
        }
        else {
            setWishItem([...wishItem, { ...wish, quantity: 1 }]);
        }
    }
    const handleRemoveWish = (id) => {
        alert('Remove wish item');
        const arr = wishItem.filter((item) => item.id !== id)
        setWishItem(arr);
    };

    // ++++Product Category++++
    const dataCategoryAPI = CategoryPageAPI();
    const dataCategory = dataCategoryAPI;

    // ++++ POST (BLOG)++++
    const dataBlogAPI = PostAPI();
    const dataBlog = dataBlogAPI;
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
                            {dataCategory.sort((a, b) => a.id > b.id ? 1 : -1).map((item) => (
                                <li key={item.id}><Link to={`/${item.slug}`}>{item.name}</Link></li>
                            )).slice(0, 2)}

                            <li><Link to="/AboutUs">ABOUT US</Link></li>

                            {dataBlog.sort((a, b) => a.id < b.id ? 1 : -1).map((item) => (
                                <li key={item.id}> <Link to={`/post/${item.slug}`}>{item.name}</Link></li>
                            )).slice(0, 1)}
                            <li><Link to="/collectionn">COLLECTION</Link></li>
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
                                    {dataProductPage
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
                            <span className='wish-number'>{wishItem.length === 0 ? "" : wishItem.length}</span>
                        </Link>
                    </li>

                    <li className='btn-cart'>
                        <Link to="/Cart"><i className="pe-7s-cart" id="Cart"></i>
                            <span className='cart-number'>{cartItem.length === 0 ? "" : cartItem.length}</span>
                        </Link>
                    </li>

                </div>
            </div>
            <Routes>
                <Route path="" element={<HomePage
                    cartItem={cartItem}
                    handleAddtoCart={handleAddtoCart}
                />}></Route>

                <Route path="*" element={<NotFound to="notfound" />} />
                {/* <Route path="/*" element={<Navigate to="not-found" />} /> */}


                <Route path="/:slug" element={<CategoryPage
                    cartItem={cartItem}
                    handleAddtoCart={handleAddtoCart}
                />}></Route>


                <Route path="/AboutUs" element={<AboutPage />}></Route>
                <Route path="/post/:slug" element={<BlogPage />}></Route>
                <Route path="/Contact" element={<ContactPage />}></Route>
                {/* <Route path="/Search" element={<SearchBox />}></Route> */}

                <Route path="/collectionn" element={<CollectionPage />}></Route>

                <Route path="/:name/:id" element={<Productdetail
                    cartItem={cartItem} wishItem={wishItem}
                    handleAddtoCart={handleAddtoCart}
                    handleAddtoWish={handleAddtoWish}
                />}></Route>

                <Route path="/posts/:title" element={<BlogPageDetail />}></Route>

                {/* <Route path="/Blogs/:name/:id" element={<FooterSliderDetail />}></Route> */}

                <Route path="/Cart" element={<CartPageDetali
                    cartItem={cartItem}
                    handleAddtoCart={handleAddtoCart}
                    handleRemovetoCart={handleRemovetoCart}
                    handleCleartoCart={handleCleartoCart}
                    handleRemoveItem={handleRemoveItem}
                />}></Route>

                <Route path="/Wish" element={<WishPageDetali
                    wishItem={wishItem} cartItem={cartItem}
                    handleAddtoWish={handleAddtoWish}
                    handleRemoveWish={handleRemoveWish}
                    handleAddtoCart={handleAddtoCart}
                />}></Route>

            </Routes>
        </div>

    )
}