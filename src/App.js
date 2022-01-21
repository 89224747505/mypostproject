import './App.css';
import React, {useMemo, useState} from "react";
import NewPostForm from "./components/NewPostForm/NewPostForm";
import MyPostList from "./components/MyPostList/MyPostList";
import MySelect from "./components/MySelect/MySelect";
import MyInput from "./components/MyInput/MyInput";


const App = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [selectSort, setSelectSort] = useState('title');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPost = useMemo(() => {
        if (selectSort) {
            return [...allPosts].sort((a, b) => a[selectSort].localeCompare(b[selectSort]));
        } else return allPosts;
    }, [selectSort, allPosts]);

    const sortPosts = (event) => {
        setSelectSort(event);
        setAllPosts(sortedPost);
    }

    const addPost = (post) => {
        setAllPosts([...allPosts, post]);

    }
    const deletePost = (id) => {
        setAllPosts(allPosts.filter(p => p.id !== id));
    }

    const searchOnKeyEnter = (event) => {
        if (event.key === 'Enter') {
            console.log("ok");
            setSearchQuery('');
        }
    }
    return (
        <div className="App">
            <NewPostForm addPost={addPost}/>
            <hr style={{margin: '20px 0px'}}/>

            <MyInput
                onKeyDown={searchOnKeyEnter}
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Поиск..."
                style={{fontSize: '16px', width: '200px', marginLeft: '30px'}}/>

            <MySelect
                selectName="Фильтр постов:"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'content', name: 'По содержанию'},]}
                defaultValue="▼Сортировать▼"
                value={selectSort}
                onChangeSelect={sortPosts}
            />

            {allPosts.length !== 0
                ? <MyPostList deletePost={deletePost} posts={sortedPost}/>
                : <div className="errorMessage">В этой ветке новых постов не опубликованно</div>}

        </div>
    );
}

export default App;
