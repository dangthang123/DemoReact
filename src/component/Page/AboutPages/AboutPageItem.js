import React from 'react';
import AboutPageAPI from '../../Data/AboutPageAPI';

function AboutPageItem() {
    const useF = AboutPageAPI();
    const aboutpagelist = useF;
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

export default AboutPageItem;