import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../Footer';
import { listpost } from '../../Redux/Api/FecthData';

function BlogPageDetail(props) {
    const { title } = useParams();
    // const dt = PostAPI();
    const dispatchPost = useDispatch();
    const post = props.items.post;
    // console.log(post);
    const postList = useSelector((state) => state.cartlist);
    // console.log(productList);
    const { loadingPost } = postList;
    // console.log(post);
    useEffect(() => {
        dispatchPost(listpost());
    }, [dispatchPost])
    let data = [];
    post.sort((a, b) => a.id < b.id ? 1 : -1).map(item => (
        data = item.posts.nodes
    ))
    // console.log(data);
    const thisBlog = data.find((blogpage) => String(blogpage.title) === title) || {};
    // console.log(thisBlog.content);

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
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}
export default connect(mapStateToProps)(BlogPageDetail);