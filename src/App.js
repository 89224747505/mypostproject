import './App.css';
import MyPost from "./components/MyPost/MyPost";
import {useState} from "react";
import NewPostForm from "./components/NewPostForm/NewPostForm";
import MyPostList from "./components/MyPostList/MyPostList";


const App = () => {
    const [allPosts, setAllPosts] = useState([
        {
            id: 1, title: "Название: Как танцуют попугаи?", content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit reiciendis veritatis,
                quae quas iusto exercitationem officiis, consequatur harum molestias voluptates sapiente! Ullam
                expedita quis non debitis voluptates corrupti reprehenderit laborum hic blanditiis reiciendis
                neque eos asperiores aperiam sint officiis a inventore consequuntur natus, ea sequi similique.`
        }
    ]);

    const addPost = (post) => {
        setAllPosts([...allPosts, post]);

    }
    const deletePost = (id) => {
        setAllPosts(allPosts.filter(p=> p.id !== id));
    }
    return (
        <div className="App">
            <NewPostForm addPost={addPost}/>
            <MyPostList deletePost={deletePost} posts={allPosts}/>
        </div>
    );
}

export default App;
