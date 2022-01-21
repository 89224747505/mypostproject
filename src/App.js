import './App.css';
import {useState} from "react";
import NewPostForm from "./components/NewPostForm/NewPostForm";
import MyPostList from "./components/MyPostList/MyPostList";


const App = () => {
    const [allPosts, setAllPosts] = useState([]);

    const addPost = (post) => {
        setAllPosts([...allPosts, post]);

    }
    const deletePost = (id) => {
        setAllPosts(allPosts.filter(p => p.id !== id));
    }
    return (
        <div className="App">
            <NewPostForm addPost={addPost}/>
            {allPosts.length !== 0
                ? <MyPostList deletePost={deletePost} posts={allPosts}/>
                : <div className="errorMessage">В этой ветке новых постов не опубликованно</div>}

        </div>
    );
}

export default App;
