import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { listabout } from '../../Redux/Api/FecthData';

function AboutPageItem(props) {
    const dispatchAbouts = useDispatch();
    // console.log(props.abouts);
    const aboutpagelist = props.items.abouts;
    // console.log(aboutpagelist);
    useEffect(() => {
        dispatchAbouts(listabout());
    }, [dispatchAbouts])
    return (
        <div className="page-row">
            {aboutpagelist.map(aboutpage => (
                <div className="page-column" key={aboutpage.id}>
                    <div className="page-card">
                        <img src={aboutpage.img.sourceUrl} alt="" style={{ width: "100%" }}></img>
                        <div className="containers-about">
                            <h2>{aboutpage.name}</h2>
                            <p className="page-title">{aboutpage.work}</p>
                            <p>{aboutpage.contentitle}</p>
                            <a href='mailto:abc@gmail.com'><p>{aboutpage.email}</p>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist
    }
}
export default connect(mapStateToProps)(AboutPageItem);