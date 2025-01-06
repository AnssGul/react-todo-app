import React, { useState } from "react";
import { addPostApi } from "../../service/apiService";

const PostComponent = () => {
    const [posts, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const addPost = async () => {
        try {
            const newPost = await addPostApi(title, body);
            setPost([newPost, ...posts]);

            setTitle(""); // Clear the title field
            setBody("");  // Clear the body field
        } catch (error) {
            console.error("Failed to add the post.");
        }
    };

    return (
        <div>
            <h1>Add a Post</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addPost();
                }}
            >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Post title"
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Enter post content"
                    ></textarea>
                </div>
                <button type="submit">Add Post</button>
            </form>
            <h2>Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComponent;
