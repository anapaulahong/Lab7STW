function renderPosts() {
    const postsSection = document.getElementById('posts');

    //clear any existing content
    postsSection.innerHTML = '';

    //header
    const recentPostsHeader = document.createElement('div');
    recentPostsHeader.classList.add('recentposts');
    recentPostsHeader.innerHTML = '<h3>Posts recientes</h3>';
    postsSection.appendChild(recentPostsHeader);

    //datos
    const postsData = [
        {
            title: 'Sneakers trends para el 2024',
            date: '3 de abril 2024',
            category: 'Footwear',
            imageSrc: 'imagenes/gazelle.jpg',
            altText: 'tenis gazelle adidas',
            content: 'Este año, invertir en unos tenis coloridas es un must. Desde Onitsuka Tigers hasta Adidas Spezials, tu calzado es la forma perfecta para infundir color a tu outfit sin que se vuelva agobiante. También puedes combinar estratégicamente el color de tus zapatos con un elemento de tu outfit para lograr un look simétrico.'
        },
    ];

    //crear y agregar los posts al contenedor
    postsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-container');
        postElement.innerHTML = `
            <div class="blog-box">
                <div class="blogimg">
                    <img src="${post.imageSrc}" alt="${post.altText}">
                </div>
                <div class="blog-text">
                    <span>${post.date} / ${post.category}</span>
                    <a href="#" class="blog-title">${post.title}</a>
                    <p>${post.content}</p>
                    <a href="#">Leer más</a>
                </div>
            </div>
        `;
        postsSection.appendChild(postElement);
    });
}

renderPosts();
