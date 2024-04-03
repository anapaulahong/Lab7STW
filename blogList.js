import React, { useState, useEffect } from 'react';
//useEFfect solicitud get a la ruta /blogs con fetch

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []); //la dependencia vacia asegurs que useEffect solo se ejecute 1 vez al montar el componente

  return (
    <div>
      <h1>Lista de Blogs</h1>
      <ul>
        {/*mapear sobre la lista de blogs y mostrar cada uno */}
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
