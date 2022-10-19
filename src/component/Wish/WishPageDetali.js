import React from 'react';
import FooterBottom from '../Footer/FooterBottom';
import '../../css/Wish.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteItemWish, addtoCartSuccess } from '../Redux/Action/Action'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";

// function WishPageDetali({ wishItem, handleRemoveWish, handleAddtoCart }) {
function WishPageDetali({ items, deleteItemWish, addtoCartSuccess }) {
    // console.log(items);
    let ListWish = [];
    Object.keys(items.wishs).forEach(function (item) {
        ListWish.push(items.wishs[item]);
    });
    return (
        <div>
            <section className="h-100 gradient-custom">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center my-4">
                        <MDBCol md="8">
                            <MDBCard className="mb-4">
                                <MDBCardHeader className="py-3">
                                    <MDBTypography tag="h5" className="mb-0">
                                        WishList - {ListWish.length} items
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    {ListWish.map((item, key) => (
                                        <MDBRow key={key}>
                                            <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                <MDBRipple rippleTag="div" rippleColor="light"
                                                    className="bg-image rounded hover-zoom hover-overlay">
                                                    <img
                                                        src={item.image}
                                                        className="w-75" alt='' />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                        </div>
                                                    </a>
                                                </MDBRipple>
                                            </MDBCol>

                                            <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                <p>
                                                    <strong>Blue denim shirt</strong>
                                                </p>
                                                {item.onsale === true ? (
                                                    <p>Total: ${item.saleSrice}.00</p>
                                                ) : (
                                                    <p>Total: ${item.regularPrice}.00</p>
                                                )}



                                            </MDBCol>
                                            <MDBCol lg="4" md="6" className="mb-4 mb-lg-0 ">
                                                <MDBBtn onClick={() => deleteItemWish(key)} className="px-3 me-2 float-end" style={{ height: '40px', width: '50px', backgroundColor: 'red', border: 'none' }} >
                                                    <MDBIcon fas icon="trash" />
                                                </MDBBtn>

                                                <Link to='/Cart'> <MDBBtn onClick={() => addtoCartSuccess(item)} className="px-3 me-2 float-end" style={{ height: '40px', width: '50px' }} >
                                                    <MDBIcon fas icon="shopping-cart" />
                                                </MDBBtn>
                                                </Link>
                                            </MDBCol>
                                            <hr className="my-4" />
                                        </MDBRow>
                                    ))}

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <FooterBottom />
        </div>
    );
}
const mapStateToProps = state => {
    // console.log(state)
    return {
        items: state.cartlist
    }
}
export default connect(mapStateToProps, { deleteItemWish, addtoCartSuccess })(WishPageDetali);
