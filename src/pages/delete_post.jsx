import React, { useState, useEffect } from "react";
import { fetchPosts, deletePostApi } from "../service/apiService";

const DeletePosting = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPost(data);
            } catch (error) {
                console.error("Failed to load posts.");
            }
        };
        getPosts();
    }, []);

    const deletePost = async (id) => {
        try {
            await deletePostApi(id);
            setPost(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Failed to delete the post.");
        }
    };
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )

};

export default DeletePosting;
