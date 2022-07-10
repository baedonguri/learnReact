import React from "react";

function Post({post}) {
    return (
        <div className='list'>
            <h4>{post} <span onClick={()=>{setLike(like+1)}}>👍</span>{like}</h4>
            <p>2월 17일 발행</p>
        </div>
    )
};

export default Post;
