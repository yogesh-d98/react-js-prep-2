import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
export default function Post() {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {


        //a callback delay added for delaying the fetch
        fetch('/posts.mockdata.json').
            then(response => {
                return response.json()
            }).
            then((data) => {
                const foundPost = data.posts.find(currentPost => currentPost.id == Number(id))
                console.log(data)
                setPost(foundPost);
            }).catch(err => {
                console.log(err)
            });


        //clean up function
    }, [id]);
    return (
        <div className="container">
            {post ? (
                <div className="card m-3" style={{ width: "20rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.content}</p>
                    </div>
                </div>
            ) : (
                <p>Loading post...</p>
            )}
        </div>
    )
}
