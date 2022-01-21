import React from 'react';
import MyPost from "../MyPost/MyPost";

const MyPostList = (props) => {
    return (
        <div>
            {props.posts.map((p,index) => <MyPost key={p.id} deletePost={props.deletePost} number={index+1} post={p}/>)}
        </div>
    );
};

export default MyPostList;