import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import classes from "./NewPostForm.module.css";
import MyTextArea from "../MyTextArea/MyTextArea";

const NewPostForm = (props) => {
    const [post, setPost] = useState({id: 0, title: '', content: ''})

    const changeInput = (event) => setPost({...post, title: event.target.value})
    const changeTextArea = (event) => setPost({...post, content: event.target.value})
    const addNewPost = (event) => {
        event.preventDefault();
        if ((post.title !== '') && (post.content !== '')) {
            props.addPost({id: Date.now(), title: post.title, content: post.content});
            post.title = '';
            post.content = '';
        }
    }

    return (
        <form>
            <div className={classes.titleNewPostForm}>Опубликовать новый пост:</div>
            <div className={classes.newPostForm}>
                <div>
                    <div className={classes.newPostForm__input}>
                        <MyInput onChange={changeInput} placeholder="Название поста" value={post.title}/>
                    </div>
                    <div>
                        <MyTextArea onChange={changeTextArea} placeholder="Содержание поста" value={post.content}/>
                    </div>
                </div>
                <div>
                    <MyButton onClick={addNewPost}>Опубликовать</MyButton>
                </div>
            </div>
        </form>
    );
};
export default NewPostForm;
