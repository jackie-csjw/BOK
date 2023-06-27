import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAsync } from "../hooks/useAsync"
import { getPosts } from "../services/posts"
import '../App.css';

export function PostList() {
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     getPosts().then(setPosts)
    // }, [])

    const { loading, error, value: posts } = useAsync(getPosts)

    if (loading) return <h1>Loading</h1>
    if (error) return <h1 className="error-msg">{error}</h1>

    // return <h1>{JSON.stringify(posts)}</h1>
    return posts.map(post => {
        return (
            <Link
                className="post_title" key={post.id} 
                style={{ textDecoration: 'none', color: "white" }}
                to={`posts/${post.id}`}>
                    {post.title}
            </Link>
        )
    })
}