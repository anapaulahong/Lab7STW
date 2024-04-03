import React, { useState, useEffect } from 'react';

function BlogPost({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/blogs/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('error en la red :(');
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('error al querer fetchear el post:', error);
        setError(error);
        setLoading(false);
      });
  }, [postId]); //asegurar que useEffect se ejecute cada vez que postId cambie

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
