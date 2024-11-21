import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Articel from "../assets/components/Articel";
import Search from "../assets/components/Search";
function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        console.log(value)
        const filteredPosts = postsData.filter(item => item.title.includes(value))
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) => setExternalPosts(json));
    }, []);
    useEffect(() => {``
        console.log("ada Posts baru")
    }, [posts])
    useEffect(() => {
        console.log('render')
    })

    return (
        <>
            <h1>Simpelblocks</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {posts.map((props, index) => (
                <Articel {...props} key={index} />
            ))}
            <hr />
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>--{item.title}</div>
            ))}
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>--{item.title}</div>
            ))}
        </>
    );
}

export default Homepage;
