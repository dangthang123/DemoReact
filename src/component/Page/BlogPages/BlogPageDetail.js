import React from 'react';
import { useParams } from 'react-router';
import PostAPI from '../../Data/PostAPI';
import Footer from '../../Footer';





function BlogPageDetail() {
    const { title } = useParams();
    const dt = PostAPI();
    let data = [];
    dt.map(item => (
        data = item.posts.nodes
    ))
    const thisBlog = data.find((blogpage) => String(blogpage.title) === title) || {};


    return (
        <div>
            <div className="blog-page-detail container">
                <h2 className="blog-page-detail-name">{thisBlog.title}</h2>
                <p className="blog-page-detail-contentitle" dangerouslySetInnerHTML={{ __html: thisBlog.content }}></p>
            </div>
            <Footer />
        </div>
    );
}

export default BlogPageDetail;