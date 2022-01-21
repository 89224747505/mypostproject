import React from 'react';
import MyPost from "../MyPost/MyPost";

const MyPostList = (props) => {
    const renderMyPostList = () =>{
        debugger
        if (props.posts.length != 0) props.posts.map((p,index) => <MyPost key={p.id} deletePost={props.deletePost} number={index+1} post={p}/>)
    }

    return (
        <div>
            {renderMyPostList()}
        </div>
    );
};

export default MyPostList;