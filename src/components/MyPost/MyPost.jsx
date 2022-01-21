import React from 'react';
import MyButton from "../MyButton/MyButton";
import classes from "./MyPost.module.css";

const MyPost = (props) => {

    const deletePostInMyPost = () => props.deletePost(props.post.id);


    return (
        <div className={classes.MyPost}>
            <div className={classes.namePost}><span><span style={{color:'red', fontSize:'18px', marginRight:'10px'}} >{props.number}.</span>{props.post.title}</span></div>
            <div className={classes.contentPost}>
                <div>
                    {props.post.content}
                </div>
                <div className={classes.myBtnDelete}>
                    <MyButton onClick={deletePostInMyPost}>Удалить пост</MyButton>
                </div>
            </div>
        </div>
    );
};

export default MyPost;